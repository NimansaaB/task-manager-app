package com.example.backend.controller;

import com.example.backend.dto.TaskDto;
import com.example.backend.model.Task;
import com.example.backend.service.AuthService;
import com.example.backend.service.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;
    private final AuthService authService;

    @GetMapping
    public ResponseEntity<List<TaskDto>> getAllTasks() {
        Long userId = getCurrentUserId();
        return ResponseEntity.ok(taskService.getTasksByUser(userId));
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<TaskDto>> getTasksByStatus(@PathVariable String status) {
        Long userId = getCurrentUserId();
        return ResponseEntity.ok(taskService.getTasksByUserAndStatus(userId, Task.TaskStatus.valueOf(status)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskDto> getTaskById(@PathVariable Long id) {
        return ResponseEntity.ok(taskService.getTaskById(id));
    }

    @PostMapping
    public ResponseEntity<TaskDto> createTask(@Valid @RequestBody TaskDto taskDto) {
        Long userId = getCurrentUserId();
        return new ResponseEntity<>(taskService.createTask(taskDto, userId), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TaskDto> updateTask(@PathVariable Long id, @Valid @RequestBody TaskDto taskDto) {
        return ResponseEntity.ok(taskService.updateTask(id, taskDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }

    private Long getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authService.getCurrentUser().getId();
    }
}