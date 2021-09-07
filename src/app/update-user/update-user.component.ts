import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  usersId: any;
  userForm = new FormGroup({ // Step3
    email: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),

  })

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(p => {
      console.log(p.get("id"))
      this.getUsers(p.get("id"))
      this.usersId = p.get("id")
    })
  }

  ngOnInit(): void {
  }

  public getUsers(userid: any) {
    this.http.get('https://reqres.in/api/users/' + userid)
      .subscribe((res: any) => {
        this.userForm.patchValue(res.data)
        console.log(res)
      });
  }

  public postUsers() {
    console.log(this.userForm.valid)
    console.log(this.userForm.value)
    this.http.put('https://reqres.in/api/users/'+ this.usersId, this.userForm.value)
      .subscribe((res: any) => {
        alert("Updated")
        // data contains actual array of users
      });
  }


}
