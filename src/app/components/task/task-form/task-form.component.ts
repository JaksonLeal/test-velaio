import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TaskService } from 'src/app/service/task-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';            // <-- required

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class TaskFormComponent {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      deadline: [null, Validators.required],
      people: this.fb.array([]) // Array de personas
    });
  }

  get getPeople(): FormArray {
    return this.taskForm.get('people') as FormArray;
  }

  get getSkills(): FormArray {
    return this.getPeople.get('skills') as FormArray;
    
  }
  addPerson() {
    const personForm = this.fb.group({
      personName: ['', [Validators.required, Validators.minLength(5)]],
      perAge: [null, [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.fb.control('', Validators.required)]), // Array de habilidades
    });
    this.getPeople.push(personForm);
  }

  addSkill(personIndex: number) {
    const person = this.getPeople.at(personIndex) as FormGroup;
    const skills = person.get('skills') as FormArray;
    skills.push(this.fb.control('', Validators.required));
  }

  removePerson(personIndex: number) {
    this.getPeople.removeAt(personIndex);
  }

  submit() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value);
      this.taskForm.reset();
    }
  }
}
