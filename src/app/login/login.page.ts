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
      console.log('Mobile:', this.loginForm.value.mobile);
      console.log('username:', this.loginForm.value.username);
      // Navigate to the home page on successful login
      this.navCtrl.navigateRoot('/otp');
    } else {
      // Show validation errors
      this.loginForm.markAllAsTouched();
    }
  }

  get mobile() {
    return this.loginForm.get('mobile');
  }

  get username() {
    return this.loginForm.get('username');
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // 10 digit mobile number validation
      username: ['', Validators.required]
    });
  }

}
