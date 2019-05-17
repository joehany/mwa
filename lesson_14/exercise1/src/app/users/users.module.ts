import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  entryComponents: [UsersComponent]
})
export class UsersModule { }
