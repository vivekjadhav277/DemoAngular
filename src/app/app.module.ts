import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './demo1/hearder/hearder.component';

import { Demo1Module } from "../app/demo1/demo1.module";
import { DemoService } from './services/demo.service';
import { TestComponent } from './test/test.component';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestErrorComponent,
    NotFoundComponent,
    // HearderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Demo1Module,
    HttpClientModule
  ],
  providers: [
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
