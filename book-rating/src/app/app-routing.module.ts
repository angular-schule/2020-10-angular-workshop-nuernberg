import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // ******************************* Reihenfolge wichtig *********************************
  // nur mit pathMatch: 'full'
  // { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'sockets', loadChildren: () => import('./sockets/sockets.module').then(m => m.SocketsModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    // enableTracing: true,
    scrollPositionRestoration: 'top' // TODO: change to 'enabled' when we have better control of our state
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
