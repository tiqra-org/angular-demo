import { Routes } from "@angular/router";
import { AboutComponent } from "./views/about/about.component";
import { HomeComponent } from "./views/home/home.component";
import { UserProfileComponent } from "./views/user-profile/user-profile.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'profile', component: UserProfileComponent, title: 'User profile' },
  { path: 'about', component: AboutComponent, title: 'About' },
];