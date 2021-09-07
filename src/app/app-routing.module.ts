import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { VeiwUserComponent } from './veiw-user/veiw-user.component';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [ 
  { path: 'user-list', component:UserListComponent },
  { path: 'view-user/:id', component:VeiwUserComponent },
  { path: 'user-not-found', component:UserNotFoundComponent },
  { path: 'create-user',component:CreateUserComponent},
  { path: 'update-user/:id', component:UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
