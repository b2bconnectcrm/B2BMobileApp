import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(private navCtrl: NavController, private fb: FormBuilder, private loginService: LoginService,
    private alertController: AlertController) {
    this.loginForm = this.fb.group({
      password: ['', [Validators.required]],
      username: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.doLogin(this.loginForm.value).subscribe((data: any) => {
        this.navCtrl.navigateRoot('/home');
      }, (error: any) => {
        this.presentAlert();
        console.dir(error);
      })

    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get password() {
    return this.loginForm.get('password');
  }

  get username() {
    return this.loginForm.get('username');
  }

  ngOnInit() {

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Credentials ',
      message: 'Please enter valid Credentials',
      buttons: ['OK'],
    });

    await alert.present();
  }



}
