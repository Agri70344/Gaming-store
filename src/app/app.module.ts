import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { DetailsComponent } from './components/details/details.component';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { HeaderComponent } from './components/header/header.component';
import { ConsolesComponent } from './components/consoles/consoles.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';
import { CartComponent } from './components/consoles/cart/cart.component';
import { ProductComponent } from './components/consoles/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    GameTabsComponent,
    HeaderComponent,
    ConsolesComponent,
    FooterComponent,
    ReviewsComponent,
    LoginComponent,
    RegistrationComponent,
    AddReviewsComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpHeadersInterceptor,
      multi:true,
    },
    {
      provide :HTTP_INTERCEPTORS,
      useClass:HttpErrorsInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
