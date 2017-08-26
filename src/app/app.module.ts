import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {AccordionModule} from 'freeng/freeng'; //accordion
import {RippleModule} from 'freeng/freeng';
import {SidenavModule} from 'freeng/freeng';
// import  { AniModule } from './directives/ani.module';

import { AppComponent } from './app.component';
import  { StudentsComponent } from './students-info/students.component';
import { InterviewComponent } from './interview/interview.component';
import { ErrorComponent } from './404/error.component';
import  { CanvasAnimation3 } from './directives/canvas.ani3.directive';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'student-worked', component: StudentsComponent },
  { path: 'interview-review', component: InterviewComponent },
  { path: '**', component: StudentsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CanvasAnimation3,
    ErrorComponent,
    StudentsComponent,
    InterviewComponent,
    ErrorComponent
  ],
  imports: [
    // AccordionModule,
    RippleModule,
    SidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
