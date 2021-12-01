import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userRegistrationForm:FormGroup;
  validMessage:string=" ";

  constructor(
    private userRegistration:ReviewsService,
    private router: Router
    ) { }

  registrationForm(){
    this.userRegistrationForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    });
  }

  addUser(userRegistrationForm){
    if(this.userRegistrationForm.valid){
      alert(this.validMessage= "Thank You for Registering!");
      this.userRegistration
        .createUser(this.userRegistrationForm.value)
        .subscribe(
        (data)=>{this.userRegistrationForm.reset()},
        (err)=>{console.log(err)}
        );
        this.router.navigate(["/login"]);
    } else {
      alert(this.validMessage="Please fill out all forms")
    }
  }  

  ngOnInit(): void {
    this.registrationForm();
    
  }

}