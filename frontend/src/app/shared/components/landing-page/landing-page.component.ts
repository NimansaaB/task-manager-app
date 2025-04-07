import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  features = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      title: 'Task Organization',
      description: 'Create, organize, and track your tasks with a clean and intuitive interface.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      title: 'Status Tracking',
      description: 'Monitor task progress with customizable status categories from todo to complete.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      title: 'Time Management',
      description: 'Improve productivity by managing and prioritizing your daily tasks effectively.'
    }
  ];

  testimonials = [
    {
      content: "Task Manager has completely transformed how I organize my work. The interface is intuitive and the status tracking feature helps me stay on top of all my projects.",
      author: "Sarah Johnson",
      position: "Product Manager"
    },
    {
      content: "I've tried many task management tools, but this one strikes the perfect balance between simplicity and functionality. It's now an essential part of my daily workflow.",
      author: "Michael Chen",
      position: "Software Developer"
    },
    {
      content: "The clean design and ease of use make this app stand out. I can quickly add tasks and track their progress without any unnecessary complexity.",
      author: "Emma Rodriguez",
      position: "Design Lead"
    }
  ];

  constructor(public authService: AuthService) {}
}
