import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';
import { Job } from './job.vo';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs: Job[];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJob();
  }

  getJob(){
    this.jobService.getJob().subscribe(body=>{
      this.jobs = body;
    });
  }

}
