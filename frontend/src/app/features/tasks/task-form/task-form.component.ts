import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  isEditMode = false;
  taskId: number | null = null;
  loading = false;
  submitting = false;
  error = '';
  statuses = ['TO_DO', 'IN_PROGRESS', 'DONE'];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      status: ['TO_DO', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.taskId = +id;
      this.loadTask(this.taskId);
    }
  }

  loadTask(id: number): void {
    this.loading = true;
    this.taskService.getTaskById(id).subscribe({
      next: (task) => {
        this.taskForm.patchValue({
          title: task.title,
          description: task.description,
          status: task.status
        });
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load task. Please try again.';
        this.loading = false;
        console.error('Error loading task:', err);
      }
    });
  }

  onSubmit(): void {
    if (this.taskForm.invalid || this.submitting) {
      return;
    }

    this.submitting = true;
    const taskData: Partial<Task> = {
      title: this.taskForm.value.title,
      description: this.taskForm.value.description,
      status: this.taskForm.value.status
    };

    if (this.isEditMode && this.taskId) {
      this.taskService.updateTask(this.taskId, taskData).subscribe({
        next: () => {
          this.submitting = false;
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          this.error = 'Failed to update task. Please try again.';
          this.submitting = false;
          console.error('Error updating task:', err);
        }
      });
    } else {
      this.taskService.createTask(taskData).subscribe({
        next: () => {
          this.submitting = false;
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          this.error = 'Failed to create task. Please try again.';
          this.submitting = false;
          console.error('Error creating task:', err);
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/tasks']);
  }
}
