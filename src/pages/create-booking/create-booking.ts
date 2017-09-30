import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FirebaseProvider } from "../../providers/firebase/firebase";
import * as uuid from "uuid/v1";
import * as moment from "moment";

/**
 * Generated class for the CreateBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-create-booking",
  templateUrl: "create-booking.html"
})
export class CreateBookingPage {
  room = "";
  fromDate = "";
  fromTime = "";
  toDate = "";
  toTime = "";

  minDate = moment().format("YYYY-MM-DD");
  minTime = moment()
    .hour(18)
    .format("YYYY-MM-DDThh:mm");

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebase: FirebaseProvider
  ) {}

  submit() {
    let booking = {
      id: uuid(),
      room: this.room,
      fromData: this.fromDate,
      fromTime: this.fromTime,
      toDate: this.toDate,
      toTime: this.toTime,
      uid: this.firebase.currentUser.uid
    };

    this.firebase
      .database()
      .ref("bookings/" + booking.id)
      .set(booking)
      .then(() => {
        return this.firebase
          .database()
          .ref("users/" + booking.uid + "/bookings/" + booking.id)
          .set(booking);
      })
      .then(() => {
        return this.navCtrl.pop();
      });
  }
}
