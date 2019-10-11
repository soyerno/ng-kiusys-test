import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule, GridsterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
