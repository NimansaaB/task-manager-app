package com.example.backend.service;

import com.example.backend.dto.JwtResponse;
import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.RegisterRequest;
import com.example.backend.dto.UserDto;

public interface AuthService {
    JwtResponse login(LoginRequest loginRequest);

    UserDto register(RegisterRequest registerRequest);

    UserDto getCurrentUser();
}