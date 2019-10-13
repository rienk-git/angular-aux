import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';


const routes: Routes = [
  {
    path: 'component1',
    component: Component1Component
  },
  {
    path: 'component2',
    component: Component2Component
  },
  {
    path: 'submodule1',
    loadChildren: () => import('./modules/submodule1/submodule1.module').then(mod => mod.Submodule1Module)
  },
  {
    path: 'auxcomponent',
    component: Component1Component,
    children: [ 
      {path: 'component2', component: Component2Component, outlet: 'side1'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
