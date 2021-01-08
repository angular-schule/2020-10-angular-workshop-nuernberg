import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocketsRoutingModule } from './sockets-routing.module';
import { StartComponent } from './start/start.component';
import { StoreModule } from '@ngrx/store';
import * as fromSockets from './store/socket.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SocketsEffects } from './store/socket.effects';


@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    SocketsRoutingModule,
    StoreModule.forFeature(fromSockets.socketsFeatureKey, fromSockets.reducer),
    EffectsModule.forFeature([SocketsEffects])
  ]
})
export class SocketsModule { }
