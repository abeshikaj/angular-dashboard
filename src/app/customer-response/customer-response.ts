import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-response',
  templateUrl: './customer-response.html',
  styleUrls: ['./customer-response.css'], // ✅ add your CSS file here
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CustomerResponseComponent {
  constructor(public data: DataService) {}

  confirmBooking(booking: any) {
    booking.status = 'ON_WORK'; // ✅ Move to ON_WORK tab
  }

  cancelBooking(booking: any) {
    booking.status = 'CANCELLED'; // ✅ Mark cancelled
  }

  sendCustomerNote(booking: any) {
    if (booking.newCustomerNote?.trim()) {
      this.data.addCustomerNote(booking.id, booking.newCustomerNote);
      booking.newCustomerNote = ''; // clear input
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
}
