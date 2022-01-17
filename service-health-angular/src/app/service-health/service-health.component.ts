import { Component, OnInit } from '@angular/core';
import { ServiceHealthList } from '../model/mock-service-health';

@Component({
  selector: 'app-service-health',
  templateUrl: './service-health.component.html',
  styleUrls: ['./service-health.component.css']
})
export class ServiceHealthComponent implements OnInit {

  serviceHealthList: any;
  showServiceHealth: boolean = false;
  showServiceHealthByDate: boolean = false;
  isHealthy: boolean = false;
  constructor() {}

  ngOnInit(): void {
  }

  getServiceHealthList(){
    this.showServiceHealth = true;
    this.showServiceHealthByDate = false;
    this.serviceHealthList = ServiceHealthList;
  }

  getServiceHealthByDate() {
    this.showServiceHealthByDate = true;
    this.showServiceHealth = false;
  }

  checkStatus(status: String){
    if(status === "Active"){
      this.isHealthy = true;
      return this.isHealthy;
    }
    else{
      this.isHealthy = false;
      return this.isHealthy;
    }

  }
  
}
