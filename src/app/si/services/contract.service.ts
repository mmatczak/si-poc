import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  vehicleDetails: VehicleDetails = {};
  personalDetails: PersonalDetails = {};

  constructor() { }

  setVehicleDetails(details: VehicleDetails) {
    this.vehicleDetails = details;
  }
}

export interface VehicleDetails {
  vin?: string;
  duration?: string;
}

export interface PersonalDetails {
  firstName?: string;
  lastName?: string;
}
