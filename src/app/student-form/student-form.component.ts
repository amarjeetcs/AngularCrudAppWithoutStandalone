import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  model: Partial<Student> = {
    studentName: '',
    studentDob: '',
    studentCity: '',
    studentCountry: '',
    studentMobile: '',
    studentEmail: '',
    studentCourse: '',
    studentCourseDuration: ''
  };
  editingId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private svc: StudentService
  ) {
    console.group('🔵 STEP 1: Constructor Called');
    console.log('Component initialized, dependencies injected');
    console.log('ActivatedRoute:', this.route);
    console.log('Router:', this.router);
    console.log('StudentService:', this.svc);
    console.groupEnd();
  }

  ngOnInit(): void {
    console.group('🟡 STEP 2: ngOnInit() - Component Initialization');
    console.log('Component has been initialized');
    
    debugger; // BREAKPOINT 1: Component lifecycle
    
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route parameter ID:', id);

    if (id) {
      console.group('🟠 STEP 2.1: Edit Mode - Fetching existing student');
      const existing = this.svc.getById(+id);
      console.log('Existing student found:', existing);
      
      debugger; // BREAKPOINT 2: Edit mode
      
      if (existing) {
        this.editingId = existing.id;
        this.model = { ...existing };
        console.log('Model populated with existing data:', this.model);
        console.log('Editing ID:', this.editingId);
      }
      console.groupEnd();
    } else {
      console.log('🟢 STEP 2.2: Create Mode - No ID provided, creating new student');
    }
    
    console.groupEnd();
  }

  save() {
    console.group('🟣 STEP 3: save() method called');
    console.log('Current model data:', this.model);
    
    debugger; // BREAKPOINT 3: Save method
    
    if (!this.model.studentName || !this.model.studentName.trim()) {
      console.error('❌ Validation failed: Student name is required');
      debugger; // BREAKPOINT 4: Validation error
      alert('Name required');
      return;
    }
    
    console.log('✅ Validation passed: Name is provided');

    if (this.editingId) {
      console.group('🟠 STEP 3.1: Update Mode');
      console.log('Updating student with ID:', this.editingId);
      console.log('New data:', this.model);
      
      debugger; // BREAKPOINT 5: Update operation
      
      this.svc.update(this.editingId, this.model as Partial<Student>);
      console.log('Update complete');
      console.groupEnd();
    } else {
      console.group('🟢 STEP 3.2: Create Mode');
      console.log('Creating new student');
      console.log('Student data:', this.model);
      
      debugger; // BREAKPOINT 6: Create operation
      
      this.svc.create(this.model as Partial<Student>);
      console.log('Create complete');
      console.groupEnd();
    }

    console.log('🔵 STEP 4: Navigating to /students');
    debugger; // BREAKPOINT 7: Navigation
    
    this.router.navigate(['/students']);
    console.log('Navigation initiated');
    console.groupEnd();
  }

  cancel() {
    console.group('⚫ STEP X: cancel() method called');
    console.log('User cancelled the form');
    
    debugger; // BREAKPOINT 8: Cancel operation
    
    console.log('Navigating back to /students');
    this.router.navigate(['/students']);
    console.groupEnd();
  }
}
