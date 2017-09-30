import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCvzxA1x_ov-4qpU913FP_a_WanC5Fmwvg",
  authDomain: "ionic-training-c1603.firebaseapp.com",
  databaseURL: "https://ionic-training-c1603.firebaseio.com",
  projectId: "ionic-training-c1603",
  storageBucket: "ionic-training-c1603.appspot.com",
  messagingSenderId: "951903650715"
};

let testFunction = function(email, password) {};

let testFunction2 = (email, password) => {};

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  currentUser: any = null;

  constructor() {
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }

  onAuthStateChanged(observer) {
    return firebase.auth().onAuthStateChanged(observer);
  }

  user() {
    return this.currentUser;
  }

  auth(){
    return firebase.auth();
  }

  database(){
    return firebase.database();
  }

  logout() {
    return firebase.auth().signOut();
  }

  login(credentials) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  register(user) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(data => {
        return firebase.auth().currentUser.updateProfile({
          displayName: user.name,
          photoURL: ""
        });
      });
  }
}
