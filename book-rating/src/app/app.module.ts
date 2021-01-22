import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { BookComponent } from './book/book.component';
// import { NgForRepeatDirective } from './shared/ng-for-repeat.directive';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // AppRoutingEndModule
  ],
  providers: [],
  bootstrap: [AppComponent],    // mh: das ist die Start-Component
})
export class AppModule { }
