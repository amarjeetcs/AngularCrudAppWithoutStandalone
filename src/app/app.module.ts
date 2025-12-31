import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './students/students-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentViewComponent } from './student-view/student-view.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentFormComponent,
    StudentViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
