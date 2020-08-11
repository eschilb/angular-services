import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';

const routes: Routes = [
  {path: 'comp-four', component: CompFourComponent},
  { path: '', redirectTo: '/comp-four', pathMatch: 'full' },
  {path: 'comp-two', component: CompTwoComponent},
  {path: 'comp-three', component: CompThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
