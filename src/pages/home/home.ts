import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { RegisterPage } from "../register/register";
import { FirebaseProvider } from "../../providers/firebase/firebase";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor (public navCtrl: NavController, public firebase: FirebaseProvider) {

  }

  logout(){
    this.firebase.logout().then(() => {
      console.log('logged out');
    });
  }

  login () {
    this.navCtrl.push(LoginPage);
  }

  register () {
    this.navCtrl.push(RegisterPage);
  }
}
