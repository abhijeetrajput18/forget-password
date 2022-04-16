import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormErrorStateMatcher } from 'src/app/utils/errorMatcher';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassForm! : FormGroup;
  matcher = new FormErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder, private apiService:ApiService,
    private router: Router
  ) { }

  get otp() { return this.forgetPassForm.get('otp'); }


  ngOnInit(): void {
    this.forgetPassForm = this.formBuilder.group({
      otp: ['', Validators.compose([Validators.required])]
  })
  }

  onSubmit(){
    console.log(this.forgetPassForm)
  }

}
