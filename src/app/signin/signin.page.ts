import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Router } from "@angular/router";

import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {


  password: string = ""
  cpassword: string = ""
  email: string = ""


  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router

  ) { }



  ngOnInit() {
  }


  async signin() {
    const { email, password, cpassword } = this

    if (password != cpassword) {
      this.showAlert("Error!", "Passwords don't match")
      return console.error("Passwords don't match")
    }

    try {

      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      console.log(res)
      this.showAlert("Success!", "Welcome")
      this.router.navigate(['/intro'])

    } catch (error) {

      console.dir(error)
      this.showAlert("Error", error.message)
    }

  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })

    await alert.present()

  }

}
