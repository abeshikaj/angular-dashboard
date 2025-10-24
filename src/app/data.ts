import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  bookings: any[] = [];

  addBooking(booking: any) {
    this.bookings.push({
      ...booking,
      id: Date.now(),
      status: 'NEW',
      returnDate: '',
      returnTime: '',
      note: '',
      payment: 0,
      progress: 0,
      workerNotes: [], // all notes from workshop
      customerNotes: [], // all notes from customer
    });
  }

  updateBookingStatus(id: number, status: string) {
    const booking = this.bookings.find((b) => b.id === id);
    if (booking) booking.status = status;
  }

  updateBookingDetails(id: number, updates: any) {
    const booking = this.bookings.find((b) => b.id === id);
    if (booking) Object.assign(booking, updates);
  }

  addWorkerNote(id: number, text: string) {
    const booking = this.bookings.find((b) => b.id === id);
    if (booking && text.trim()) booking.workerNotes.push({ text, time: new Date() });
  }

  addCustomerNote(id: number, text: string) {
    const booking = this.bookings.find((b) => b.id === id);
    if (booking && text.trim()) booking.customerNotes.push({ text, time: new Date() });
  }
}
