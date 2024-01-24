import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      profilePicture: [null, [this.profilePictureValidator]],
      email: ['', Validators.required],
      number: ['', Validators.required],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      state: ['', Validators.required],
      country: ['', Validators.required],
      addressType: ['', Validators.required],
      homeAddress1: [''],
      homeAddress2: [''],
      companyAddress1: [''],
      companyAddress2: [''],
      subscribeToNewsletter: [false], 
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const formValue = this.profileForm.value;
    const isSubscribed = formValue.subscribeToNewsletter;

    console.log(formValue);
    console.log('Subscribed to newsletter:', isSubscribed);
  }

  profilePictureValidator(control: FormControl) {
    const file = control.value as File;

    if (file) {
      const image = new Image();

      image.onload = () => {
        const width = image.width;
        const height = image.height;

        // Check if the image size is within the specified limits
        if (width === 310 && height === 325) {
          control.setErrors(null);  // Image size is valid
        } else {
          control.setErrors({ invalidSize: true });  // Image size is invalid
        }
      };

      image.src = URL.createObjectURL(file);
    }

    return null;
  }

}
