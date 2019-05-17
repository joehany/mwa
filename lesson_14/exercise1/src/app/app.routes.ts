import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailsComponent } from "./users/user-details.component";

const MY_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/:uuid', component: UserDetailsComponent },
    { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
