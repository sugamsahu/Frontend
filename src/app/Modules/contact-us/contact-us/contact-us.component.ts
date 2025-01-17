import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(
    private fb:FormBuilder
  ){}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
        this.contactForm = this.fb.group({
          name:[null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
          phone_number:[null, Validators.compose([Validators.required, Validators.minLength(9)])],
          email:[null, Validators.compose([Validators.required])],
          message:[null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])]
        })
  }

  get fval() {
    return this.contactForm.controls;
  }

  onSubmit(){
    console.log("submit");
    console.log(this.contactForm.controls);
    this.contactForm.markAllAsTouched();
  }
}
