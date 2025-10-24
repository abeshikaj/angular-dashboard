import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data';

@Component({
  selector: 'app-workers-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workers-dashboard.html',
  styleUrls: ['./workers-dashboard.css'], // ✅ add your CSS file here
})
export class WorkersDashboardComponent {
  activeTab = 'NEW';

  constructor(public data: DataService) {}

  updateBookingStatus(booking: any, status: string) {
    booking.status = status;
  }

  confirmBooking(booking: any) {
    booking.status = 'PENDING';
    booking.returnDate = booking.returnDate || new Date().toISOString().split('T')[0];
    booking.returnTime = booking.returnTime || '10:00';
    booking.payment = booking.payment || 0;
    booking.finishedPercent = booking.finishedPercent || 0;
  }

  sendWorkerNote(booking: any) {
    if (booking.newWorkerNote?.trim()) {
      this.data.addWorkerNote(booking.id, booking.newWorkerNote);
      booking.newWorkerNote = ''; // clear input
    }
  }

  getRemainingDays(start: string, end: string): string {
    if (!start || !end) return 'N/A';
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diff = endDate.getTime() - startDate.getTime();

    if (diff < 0) return 'Past due';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return `${days} day(s) ${hours} hour(s) remaining`;
  }

  updateProgress(booking: any) {
    const total = booking.serviceTypes.length;
    const completed = booking.completedServices.filter((x: boolean) => x).length;
    booking.finishedPercent = Math.round((completed / total) * 100);
  }
}
