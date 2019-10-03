import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LodgeProfileComponent } from './lodge-profile/lodge-profile.component';
import { PetitionComponent } from './petition/petition.component';
import { PetitionPart2Component } from './petition-part2/petition-part2.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'lodge-profile', component: LodgeProfileComponent },
  { path: 'petition', component: PetitionComponent },
  { path: 'petition-part2', component: PetitionPart2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
