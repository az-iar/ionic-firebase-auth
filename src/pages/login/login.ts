import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FirebaseProvider } from "../../providers/firebase/firebase";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  email: string = "";
  password: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebase: FirebaseProvider
  ) {}

  submitLogin() {
    let credentials = {
      email: this.email,
      password: this.password
    };

    this.firebase
      .login(credentials)
      .then(data => {
        return this.navCtrl.pop();
      })
      .catch(error => {
        console.log(error);
      });
  }

  showLoginButton() {
    return this.email != "" && this.password != "";
  }
}
