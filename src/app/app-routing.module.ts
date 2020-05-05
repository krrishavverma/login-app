import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { SingleUserDetailsComponent } from './single-user-details/single-user-details.component';
import { EditDetailsComponent } from './users-details/edit-details/edit-details.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'registration', component:RegisterAccountComponent},
  {path:'users-details', component:UsersDetailsComponent},
  {path: 'user-detail/:username', component:SingleUserDetailsComponent},
  {path: 'edit-detail/:username', component: EditDetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
