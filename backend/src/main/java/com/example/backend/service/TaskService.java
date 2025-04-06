package com.example.backend.service;

import com.example.backend.dto.TaskDto;
import com.example.backend.model.Task;

import java.util.List;

public interface TaskService {
    List<TaskDto> getAllTasks();

    List<TaskDto> getTasksByUser(Long userId);

    List<TaskDto> getTasksByUserAndStatus(Long userId, Task.TaskStatus status);

    TaskDto getTaskById(Long id);

    TaskDto createTask(TaskDto taskDto, Long userId);

    TaskDto updateTask(Long id, TaskDto taskDto);

    void deleteTask(Long id);
}