
import { NgModule, ApplicationRef, ModuleWithProviders } from '@angular/core';
// Ahead of Time compile
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {   enableProdMode } from '@angular/core';
import {  Ng2SelectModule, Ng2Select } from 'ng2-material-select/dist/index';
import { XHRBackend } from "@angular/http";
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { Test } from './lib/test';

//import { Ng2Select } from 'ng2-material-select';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SelectModule,
    RouterModule,
  ],
  exports: [
  ],
  providers: [
  ],
  declarations: [
    Test,
    Ng2Select,
  ],
  entryComponents: [
    Test
  ],
  bootstrap: [Test]
})
export class AppModule {
}