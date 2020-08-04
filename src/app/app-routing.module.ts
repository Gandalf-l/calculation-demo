import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'calculation',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/calculation/calculation.module').then((m) => m.CalculationModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'calculation'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
