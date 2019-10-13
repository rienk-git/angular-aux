import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Submodule1RoutingModule } from './submodule1-routing.module';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';


@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [
    CommonModule,
    Submodule1RoutingModule
  ]
})
export class Submodule1Module { }
