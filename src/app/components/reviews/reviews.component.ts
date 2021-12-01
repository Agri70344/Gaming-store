import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Review } from 'src/app/models';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  
  listReview:Review[]=[];
  message:string="";
  articleForm:FormGroup;

  constructor(private article:ReviewsService) {}

  newForm(){
    this.articleForm = new FormGroup({
      stars:new FormControl('',[Validators.required]),
      userName:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      title:new FormControl('',[Validators.required]),
      text:new FormControl('',[Validators.required]),
    })
  }

  submitArticle(){
    if (this.articleForm.valid){
      this.article.createReview(this.articleForm.value).subscribe(
      (data)=>{
        this.message="Your article form has been submited!"
        this.articleForm.reset();
        this.getReview();
      },
      (err)=>{console.log(err)}
      )} 
    else{this.message="Please fill out the article form before submitting"}
  }
  
  getReview():void { 
    this.article.getReview().subscribe(
      (data)=>{this.listReview = data},
      (err)=>{err}
      );
  }

  deleteUsers(id:any){
    this.article.deleteReview(id).subscribe(
      data=>{console.log(data)}
    )
    this.getReview();
  }
  

  ngOnInit(): void {
    this.newForm();
    this.getReview();
  }

}
