import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient) {
    this.getUsers()
   }


  public getUsers() {
    this.http.get('https://reqres.in/api/users')
      .subscribe((res: any) => {
        this.users = res.data;
        console.log(this.users)
        // data contains actual array of users
      });
  }

  ngOnInit(): void {
  }

}

