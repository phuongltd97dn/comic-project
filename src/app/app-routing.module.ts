import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AllBookComponent } from './all-book/all-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'allbook/:category', component: AllBookComponent },
  { path: 'search/:search', component: AllBookComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
