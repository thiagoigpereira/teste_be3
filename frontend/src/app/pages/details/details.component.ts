import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/Patient';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  patient: any;
  constructor(
    private patientService: PatientsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const patientId = this.route.snapshot.paramMap.get('id') as string;
    this.patient = this.patientService.getById(patientId);
  }

}
