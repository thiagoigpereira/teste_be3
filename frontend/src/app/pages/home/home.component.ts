import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { PatientsService } from 'src/app/services/patients.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  patients: Patient[];
  constructor(private patientService: PatientsService) { }

  ngOnInit(): void {
    this.patientService.getAll()
      .subscribe((patients) => {
        this.patients = patients
        console.log(this.patients)
      })
  }

}
