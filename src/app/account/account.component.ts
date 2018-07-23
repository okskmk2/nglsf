import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Account } from './account.vo';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount() {
    this.accountService.getAccount().subscribe(body => {
      this.accounts = body;
    });
  }

}
