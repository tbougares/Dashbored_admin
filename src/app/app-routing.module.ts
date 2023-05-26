import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { AllProduitsComponent } from './views/admin/all-produits/all-produits.component';
import { DashboredComponent } from './views/admin/dashbored/dashbored.component';

const routes: Routes = [
  {path:'',component:Home1Component},
  {path:'admin',component:DashboredComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
