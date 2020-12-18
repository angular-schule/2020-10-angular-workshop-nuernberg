import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgForRepeatDirective } from './shared/ng-for-repeat.directive';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { BooksSharedModule } from 'books-shared';
import { BookDetailsComponent } from './book-details/book-details.component';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';



@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    NgForRepeatDirective,
    CreateBookComponent,
    ErrorDisplayComponent,
    BookDetailsComponent

  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    BooksSharedModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
