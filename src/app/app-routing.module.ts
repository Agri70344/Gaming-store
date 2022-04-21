import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';
import { CartComponent } from './components/consoles/cart/cart.component';

import { ConsolesComponent } from './components/consoles/consoles.component';
import { ProductComponent } from './components/consoles/product/product.component';
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
  {path:'cart',component:CartComponent},
  {path:'consoles/:id',component:ProductComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'home',component:HomeComponent},
  {path:'addReviews',component:AddReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
