import { NgModule } from '@angular/core';  // Replace &#39; with '
import { RouterModule, Routes } from '@angular/router';  // Replace &#39; with '
import { ProfileComponent } from './profile/profile.component';  // Replace &#39; with '
import { AboutComponent } from './about/about.component';  // Replace &#39; with '

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
