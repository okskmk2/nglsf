import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { QueueComponent } from './queue/queue.component';
import { HostComponent } from './host/host.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    QueueComponent,
    HostComponent,
    UserComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
