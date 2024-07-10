import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReservationService } from "../../../../services/reservation.service";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent {
  reservationForm: FormGroup
  seatsOptions = ['1-2 seats', '3-4 seats', '5-6 seats', 'more than 6 seats']
  timeOptions = ['12:00 AM - 2:00 PM', '2:00 - 4:00 PM', '4:00 - 6:00 PM', '6:00 - 8:00 PM', '8:00 - 10:00 PM', '10:00 - 12:00 PM']

  constructor(private fb: FormBuilder, private reservationService: ReservationService) {
    this.reservationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      numberOfSeats: ['', Validators.required],
      message: ['']
    })
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      this.reservationService.addReservation(this.reservationForm.value).subscribe(
        response => {
          console.log('Reservation successful', response)
          this.reservationForm.reset()
        },
        error => {
          console.error('Error creating reservation', error)
        }
      )
    }
  }
}
