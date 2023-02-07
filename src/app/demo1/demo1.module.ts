import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearderComponent } from './hearder/hearder.component';
import { FooterComponent } from './footer/footer.component';
import { DemoRouteRoutingModule } from './demo-route/demo-route-routing.module';



@NgModule({
  declarations: [
    HearderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DemoRouteRoutingModule
  ],
  providers:[
    
  ],
  exports:[
    HearderComponent,
    FooterComponent
  ]
})
export class Demo1Module { }
