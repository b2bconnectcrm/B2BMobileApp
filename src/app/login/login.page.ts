import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private navCtrl: NavController, private fb: FormBuilder) {}

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log('password:', this.loginForm.value.password);
      console.log('username:', this.loginForm.value.username);
      // Navigate to the home page on successful login
      // this.navCtrl.navigateRoot('/otp');
      this.navCtrl.navigateRoot('/home');
    } else {
      // Show validation errors
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
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      password: ['', [Validators.required]], // 10 digit password number validation
      username: ['', Validators.required]
    });
  }

}
