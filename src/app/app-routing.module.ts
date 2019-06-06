import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { BmicalculatorComponent } from './bmicalculator/bmicalculator.component';
import { CaloriecalculatorComponent } from './caloriecalculator/caloriecalculator.component';
import { HomeComponent } from './home/home.component';


export const router: Routes = [
  {path: '', redirectTo: 'app', pathMatch:'full'},
  {path:'bmi', component:  BmicalculatorComponent},
  {path: 'calorie', component: CaloriecalculatorComponent},
  {path:'home', component:  HomeComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
