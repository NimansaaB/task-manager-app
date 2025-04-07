import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task | null = null;
  loading = false;
  error = '';

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.loadTask(+id);
    } else {
      this.error = 'Task ID not provided';
      this.loading = false;
    }
  }

  loadTask(id: number): void {
    this.taskService.getTaskById(id).subscribe({
      next: (task) => {
        this.task = task;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load task. Please try again.';
        this.loading = false;
        console.error('Error loading task:', err);
      }
    });
  }

  deleteTask(): void {
    if (!this.task) return;

    if (confirm('Are you sure you want to delete this task?')) {
      this.loading = true;
      this.taskService.deleteTask(this.task.id).subscribe({
        next: () => {
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          this.error = 'Failed to delete task. Please try again.';
          this.loading = false;
          console.error('Error deleting task:', err);
        }
      });
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'TO_DO':
        return 'status-todo';
      case 'IN_PROGRESS':
        return 'status-progress';
      case 'DONE':
        return 'status-done';
      default:
        return '';
    }
  }

  formatStatus(status: string): string {
    return status.replace('_', ' ');
  }
}
