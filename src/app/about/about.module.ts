import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

// Routes
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
