import { Routes } from "@angular/router";
import { AboutComponent } from "./views/about/about.component";
import { HomeComponent } from "./views/home/home.component";
import { UserProfileComponent } from "./views/user-profile/user-profile.component";
import { ScannerComponent } from "./views/scanner/scanner.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'profile', component: UserProfileComponent, title: 'Profile' },
  { path: 'scanner', component: ScannerComponent, title: 'Scanner' },
  { path: 'about', component: AboutComponent, title: 'About' },
];