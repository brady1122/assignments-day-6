import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  users: any;
  userForm = new FormGroup({ // Step3
    email: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
  
  })

  constructor(private http: HttpClient,private router:Router){ }

  public postUsers() {                   
    console.log(this.userForm.valid)  
    console.log(this.userForm.value)  
    this.http.post('https://reqres.in/api/users', this.userForm.value)
      .subscribe((res: any) => {
        console.log(this.users)
        alert("Save")
        this.router.navigate(["/user-list"])
        // data contains actual array of users
      });
  }

  ngOnInit(): void {
  }

}
