import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { TestErrorComponent } from "./test-error/test-error.component";
import { HearderComponent } from './demo1/hearder/hearder.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component:TestComponent,
  },
  {
    path:'test-error',
    component:TestErrorComponent,
    data:{
      test:'test Error'
    }
  },
  {
    path:'header',
    component:HearderComponent,
  },
  {
    path:'footer',
    component:HearderComponent
  },
  {
    path:'**',
    // redirectTo:'',
    component:NotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
