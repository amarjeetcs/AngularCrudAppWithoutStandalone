import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];

  constructor(private svc: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.students = this.svc.getAll();
  }

  add() {
    this.router.navigate(['/students/add']);
  }

  edit(id: number) {
    this.router.navigate(['/students/edit', id]);
  }

  view(id: number) {
    this.router.navigate(['/students/view', id]);
  }

  remove(id: number) {
    if (confirm('Delete this student?')) {
      this.svc.delete(id);
      this.load();
    }
  }
}
