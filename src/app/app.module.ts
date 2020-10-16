import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {ReactiveFormsModule} from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { UpdatecomponentComponent } from './updatecomponent/updatecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UpdatecomponentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
