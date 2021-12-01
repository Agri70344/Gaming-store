import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuth } from 'src/app/models';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  userData:any=''
  
    constructor(private userAuthService:ReviewsService ,
                private router:Router) { }
  
    logInFormm(){
      this.logInForm = new FormGroup({
        username:new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required]),
      })
    }
  
    readallUsers(){
      return this.userAuthService.readAllUsers().subscribe(
        (data:UserAuth[])=>{
          const user = data.find((u:UserAuth)=>
            u.username ==this.logInForm.value.username
              && u.password ==this.logInForm.value.password);
          if(user){
          alert('LogIn succesfully!');
          this.logInForm.reset();
          this.router.navigate(["/addReviews"]);
              
        } else {
          alert('User not found ! Please register!');
          this.router.navigate(["/registration"]);
        }
        },
        (err)=>{alert("no data found" +err)}
      )
    }
  
    ngOnInit(): void {
  this.logInFormm();
    }
  
  }