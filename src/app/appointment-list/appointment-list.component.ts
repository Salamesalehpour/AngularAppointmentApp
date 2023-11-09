import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointmets: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem('appointments');
    this.appointmets = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppoitment() {
    if (this.newAppointmentTitle.length && this.newAppointmentDate) {
      let appointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointmets.push(appointment);

      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      localStorage.setItem('appointments', JSON.stringify(this.appointmets));
    }
  }

  deleteAppointment(i: number) {
    this.appointmets.splice(i, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointmets));
  }
}
