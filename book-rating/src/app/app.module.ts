import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { BookComponent } from './book/book.component';
// import { NgForRepeatDirective } from './shared/ng-for-repeat.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // BookComponent,
    // NgForRepeatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BooksModule, // removed because of lazy loading
    HttpClientModule,
    // AppRoutingEndModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
