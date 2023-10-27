import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal/principal.component';
import { MatTabGroupComponent } from './mat-tab-group/mat-tab-group/mat-tab-group.component';
import { IoComponent } from './mat-tab-group/io/io.component';



const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'mat-tab-group',
    component: MatTabGroupComponent,
    children: [
      {
        path: 'io',
        component: IoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
