import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../services/contract.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  duration36 = '36';
  duration30 = '30';

  vehicleForm: FormGroup;

  constructor(formBuilder: FormBuilder, private contract: ContractService, private router: Router, private route: ActivatedRoute) {
    this.vehicleForm = formBuilder.group({
      vin: [contract.vehicleDetails.vin || '', [Validators.required]],
      duration: [contract.vehicleDetails.duration || '36', [Validators.required]]
    });
  }

  getErrors(controlName: string) {
    let errorMsg = '';
    const errors = this.vehicleForm.get(controlName).errors;

    if (errors) {
      Object.keys(this.vehicleForm.get(controlName).errors)
        .forEach(errorKey => {
          errorMsg = errorMsg + ' ' + errorKey;
        });
    }

    return errorMsg;
  }

  goNext() {
    if (this.vehicleForm.valid) {
      this.contract.setVehicleDetails({
        vin: this.vehicleForm.get('vin').value,
        duration: this.vehicleForm.get('duration').value
      });
      this.router.navigate([this.route.snapshot.params['lang'], this.route.snapshot.params['brand'], 'personal-details']);
    }
  }

  ngOnInit() {
  }

}
