import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-not-found',
  templateUrl: './user-not-found.component.html',
  styleUrls: ['./user-not-found.component.scss']
})
export class UserNotFoundComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient) {
    this.getUsers()
   }


  public getUsers() {
    this.http.get('https://reqres.in/api/users/23')
      .subscribe((res: any) => {
        this.users = res.data;
        console.log(this.users)
        // data contains actual array of users
      });
  }

  ngOnInit(): void {
  }

}
