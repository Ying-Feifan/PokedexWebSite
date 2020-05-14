import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
