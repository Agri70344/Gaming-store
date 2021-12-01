import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Review } from 'src/app/models';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.scss']
})
export class AddReviewsComponent implements OnInit {

  listReview:Review[]=[];
  message:string="";
  articleForm:FormGroup;

  constructor(private article:ReviewsService,
    private router:Router) {}

  newForm(){
    this.articleForm = new FormGroup({
      stars:new FormControl('',[Validators.required]),
      userName:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      title:new FormControl('',[Validators.required]),
      text:new FormControl('',[Validators.required]),
    })
}
  submitReview(){
    if (this.articleForm.valid){
      this.article.createReview(this.articleForm.value).subscribe(
      (data)=>{
        this.message="Your article form has been submited!"
        this.articleForm.reset();
        this.getReview();
        this.router.navigate(["/reviews"])
        },
      (err)=>{console.log(err)}
      )} 
    else{this.message="Please fill out the article form before submitting"}
  }

  getReview():void { 
    this.article.getReview().subscribe(
      (data)=>{this.listReview = data},
      (err)=>{err}
    )
  }

  deleteReview(id: string):void{
    this.article.deleteReview(id).subscribe(
      (data) => {this.getReview()},
      (err) => {console.log(err)}
    )
  }

  ngOnInit(): void {
    this.newForm();
    this.getReview();
  }

}