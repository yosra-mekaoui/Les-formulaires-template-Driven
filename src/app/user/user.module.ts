import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule } from '@angular/forms';
import { FormUserComponent } from './form-user/form-user.component';
import { MainUserComponent } from './main-user/main-user.component';


@NgModule({
  declarations: [
    UpdateUserComponent,
    UsersListComponent,
    FormUserComponent,
    MainUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule

  ]
})
export class UserModule { }
