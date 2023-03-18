import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerDetailsComponent } from './career-details/career-details.component';
import { CareerPageComponent } from './career-page/career-page.component';

const routes: Routes = [{path:'',component:CareerPageComponent},
{path:'details',component:CareerDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
