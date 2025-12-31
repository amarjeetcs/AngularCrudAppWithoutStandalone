import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students/students-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentViewComponent } from './student-view/student-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'student', redirectTo: 'students' },
  { path: 'students', component: StudentsListComponent },
  { path: 'students/add', component: StudentFormComponent },
  { path: 'students/edit/:id', component: StudentFormComponent },
  { path: 'students/view/:id', component: StudentViewComponent },
  { path: '**', redirectTo: 'students' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
