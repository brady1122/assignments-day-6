import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veiw-user',
  templateUrl: './veiw-user.component.html',
  styleUrls: ['./veiw-user.component.scss']
})
export class VeiwUserComponent {

  users: any;

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.route.paramMap.subscribe(p =>{
    console.log(p.get("id"))
    this.getUsers(p.get("id"))
    })
   }

  ngOnInit(): void {
    //console.log("Hi On")
  }


  public getUsers(userid: any) {
    this.http.get('https://reqres.in/api/users/'+ userid)
      .subscribe((res: any) => {
        this.users = res.data;
        console.log(this.users)
      });
  }

 

}
