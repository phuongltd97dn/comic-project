import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AllBookComponent } from './all-book/all-book.component';
import { FooterComponent } from './footer/footer.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { CategoryService } from './category.service';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SignInComponent,
    SignUpComponent,
    AllBookComponent,
    FooterComponent,
    ListUserComponent,
    UserProfileComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
