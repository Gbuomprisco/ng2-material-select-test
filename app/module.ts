
import { NgModule } from '@angular/core';
// Ahead of Time compile

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Ng2SelectModule } from 'ng2-material-select';

import { Component } from '@angular/core';

@Component({
	selector: 'test',
	template: `<ng2-select [placeholder]="'Choose your framework'" 
            [options]="options"
            [(ngModel)]="framework">

</ng2-select>`
})
export class Test {
	options = ['Angular', 'React']
	framework = 'React';
}


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SelectModule,
  ],
  declarations: [
    Test
  ],
  bootstrap: [Test]
})
export class AppModule {
}
