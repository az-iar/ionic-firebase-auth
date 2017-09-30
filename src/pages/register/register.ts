import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { FirebaseProvider } from "../../providers/firebase/firebase";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  name: string = "";
  email: string = "";
  password: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public firebase: FirebaseProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }

  showRegisterButton() {
    return this.email != "" && this.password != "";
  }

  submitRegister() {
    let user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.firebase
      .register(user)
      .then(() => {
        this.toastCtrl
          .create({
            message: "Thank you for registering!",
            duration: 3000
          })
          .present();

        this.navCtrl.pop();
      })
      .catch(error => {
        this.toastCtrl
          .create({
            message: error.message,
            duration: 3000
          })
          .present();
      });
  }
}
