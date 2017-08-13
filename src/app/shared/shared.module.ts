import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  exports: [
    IonicModule,
    TranslateModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
