import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideRouteComponent } from './components/side-route/side-route.component';

const sideRoutes = [
  {
    path: '**',
    component: SideRouteComponent
  }
];

const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () => import('./modules/module1/module1.module').then(mod => mod.Module1Module)
  },
  {
    path: 'module2',
    loadChildren: () => import('./modules/module2/module2.module').then(mod => mod.Module2Module)
  },
  {
    path: 'module3',
    loadChildren: () => import('./modules/module3/module3.module').then(mod => mod.Module3Module)
  },
  {
    path: 'module1',
    outlet: 'side3',
    loadChildren: () => import('./modules/module1/module1.module').then(mod => mod.Module1Module)
  },
  {
    path: '',
    outlet: 'side',
    children: sideRoutes
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// /module1/component1(side:module1/component1//side3:module1/component1)

