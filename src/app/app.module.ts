import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { QueueComponent } from './queue/queue.component';
import { HostComponent } from './host/host.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  // 사용자 화면
  {path: '', component: IndexComponent, children: [
      {path: 'job', component: JobComponent},
      {path: 'job', component: JobComponent},
      {path: 'queue', component: QueueComponent},
      {path: 'host', component: HostComponent},
      {path: 'user', component: UserComponent},
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AccountComponent,
    JobComponent,
    QueueComponent,
    HostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
