import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    scrollPositionRestoration: 'top' // TODO: change to 'enabled' when we have better control of our state
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
