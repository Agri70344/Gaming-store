import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';

import { ConsolesComponent } from './components/consoles/consoles.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'search/:game-search',component: HomeComponent},
  {path: 'details/:id',component: DetailsComponent},
  {path: 'login',component:LoginComponent },
  {path: 'registration',component:RegistrationComponent },
  {path:'consoles',component:ConsolesComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'home',component:HomeComponent},
  {path:'addReviews',component:AddReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
