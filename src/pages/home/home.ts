import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { RegisterPage } from "../register/register";
import { FirebaseProvider } from "../../providers/firebase/firebase";
import { CreateBookingPage } from "../create-booking/create-booking";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  myBookings = [];

  constructor (
    public navCtrl: NavController,
    public firebase: FirebaseProvider
  ) {
  }

  ionViewDidEnter () {
    this.firebase.onAuthStateChanged(user => {
      if (user) {
        this.getMyBookings();
      }
    });
  }

  logout () {
    this.firebase.logout().then(() => {
      console.log("logged out");
    });
  }

  login () {
    this.navCtrl.push(LoginPage);
  }

  register () {
    this.navCtrl.push(RegisterPage);
  }

  createBooking () {
    this.navCtrl.push(CreateBookingPage);
  }

  getMyBookings () {
    this.firebase
      .database()
      .ref("users/" + this.firebase.user().uid + "/bookings")
      .on("value", snapshot => {
        let bookings = snapshot.val();
        this.myBookings = [];

        for (let item in bookings) {
          this.myBookings.push(bookings[item]);
        }
      });
  }
}
