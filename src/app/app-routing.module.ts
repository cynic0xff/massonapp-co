import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LodgeProfileComponent } from './lodge-profile/lodge-profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'lodge-profile', component: LodgeProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
