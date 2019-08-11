import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LodgeProfileComponent } from './lodge-profile/lodge-profile.component';
import { PetitionComponent } from './petition/petition.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'lodge-profile', component: LodgeProfileComponent },
  { path: 'petition', component: PetitionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
