import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-health-dashboard',
  templateUrl: './health-dashboard.component.html',
  styleUrls: ['./health-dashboard.component.css']
})
export class HealthDashboardComponent implements OnInit {

  name = "ServiceHealth";
  ServiceHealthHtml: any;
  urlString: string = "https://pepboys-service-health.s3.amazonaws.com/19-1-2022-13%3A11%3A4_Service-Health_Report.html";
  urlSafe!: SafeResourceUrl;

  constructor(private http: HttpClientModule,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.urlSafe = this.sanitizer.bypassSecurityTrustHtml(this.urlString);

  }

}
