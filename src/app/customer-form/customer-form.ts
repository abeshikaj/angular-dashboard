import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ For *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // ✅ For [(ngModel)]
import { Router } from '@angular/router';
import { DataService } from '../data';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './customer-form.html',
})
export class CustomerFormComponent {
  vehicleType = '';
  vehicleModel = '';
  services = { service: false, mechanical: false, parts: false, other: false };
  date = '';
  timeSlot = '';
  customerName = '';
  minDate = new Date().toISOString().split('T')[0];

  constructor(private data: DataService, private router: Router) {}

  submitForm() {
    const selectedServices = Object.keys(this.services).filter(
      (s) => this.services[s as keyof typeof this.services]
    );

    this.data.addBooking({
      vehicleType: this.vehicleType,
      vehicleModel: this.vehicleModel,
      serviceTypes: selectedServices,
      date: this.date,
      timeSlot: this.timeSlot,
      customerName: this.customerName,
    });

    this.router.navigate(['/workers-dashboard']);
  }
}
