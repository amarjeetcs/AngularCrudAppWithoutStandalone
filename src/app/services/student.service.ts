import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private storageKey = 'students_v1';
  private items: Student[] = [];

  constructor() {
    const raw = localStorage.getItem(this.storageKey);
    this.items = raw ? JSON.parse(raw) : [];

    // Seed sample data for first-time visibility
    if (!this.items || this.items.length === 0) {
      this.items = [
        
      ];
      this.save();
    }
  }

  private save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  getAll(): Student[] {
    return [...this.items];
  }

  getById(id: number): Student | undefined {
    return this.items.find(s => s.id === id);
  }

  create(payload: Partial<Student>): Student {
    const nextId = this.items.length ? Math.max(...this.items.map(i => i.id)) + 1 : 1;
    const s: Student = {
      id: nextId,
      studentName: payload.studentName || '',
      studentDob: payload.studentDob || '',
      studentCity: payload.studentCity || '',
      studentCountry: payload.studentCountry || '',
      studentMobile: payload.studentMobile || '',
      studentEmail: payload.studentEmail || '',
      studentCourse: payload.studentCourse || '',
      studentCourseDuration: payload.studentCourseDuration || ''
    };
    this.items.push(s);
    this.save();
    return s;
  }

  update(id: number, patch: Partial<Student>): Student | undefined {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx === -1) return undefined;
    this.items[idx] = { ...this.items[idx], ...patch };
    this.save();
    return this.items[idx];
  }

  delete(id: number): boolean {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx === -1) return false;
    this.items.splice(idx, 1);
    this.save();
    return true;
  }
}
