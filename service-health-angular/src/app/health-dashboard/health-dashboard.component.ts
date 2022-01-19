import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-health-dashboard',
  templateUrl: './health-dashboard.component.html',
  styleUrls: ['./health-dashboard.component.css']
})
export class HealthDashboardComponent implements OnInit {

  name = "ServiceHealth";
  ServiceHealthHtml: any;

  constructor(private http: HttpClientModule,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
