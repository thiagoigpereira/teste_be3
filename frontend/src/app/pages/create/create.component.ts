import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent  {

  patientForm: FormGroup;
  constructor(
    private patientsService: PatientsService,
    private formBuilder: FormBuilder
  ) {
    this.patientForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      birthDate: '',
      gender: '',
      cpf: '',
      rg: '',
      ufrg: '',
      email: '',
      healthInsurance: '',
      healthInsuranceCard: '',
      healthInsuranceCardVal: ''
    })
  } 

  onSubmit() {
    if(this.patientForm.valid) {
      const patient = this.patientForm.value;

      this.patientsService.create(patient).subscribe(
        response => {
          console.log('Formulário inserido com sucesso', response)
        },
        error => {
          console.error(error)
        }
      )

    }
  }


  

}
