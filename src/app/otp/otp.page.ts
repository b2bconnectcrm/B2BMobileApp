import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  otpForm!: FormGroup;
  constructor(private navCtrl: NavController, private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]] // 6-digit OTP validation
    });
  }

  onSubmit() {
    if (this.otpForm.valid) {
      // Handle OTP verification logic here
      console.log('OTP:', this.otpForm.value.otp);
      // Navigate to the next page on successful OTP verification
      this.navCtrl.navigateRoot('/home');
    } else {
      // Show validation errors
      this.otpForm.markAllAsTouched();
    }
  }

  get otp() {
    return this.otpForm.get('otp');
  }



  onOtpChange(event: any){
    this.otpForm.patchValue({
      otp:event
    })
    console.dir( this.otpForm.value.otp)
  }

}