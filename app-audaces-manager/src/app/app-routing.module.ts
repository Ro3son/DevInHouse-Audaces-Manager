import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: 'public', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule) },

  { path: '', component: HomeComponent,
    children: [
      { path: 'home', loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
