import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateBookingPage } from './create-booking';

@NgModule({
  declarations: [
    CreateBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateBookingPage),
  ],
})
export class CreateBookingPageModule {}
