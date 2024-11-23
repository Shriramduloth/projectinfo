package com.workfolio.service;

import com.workfolio.dto.LoginDTO;
import com.workfolio.dto.UserDTO;
import com.workfolio.exception.JobPortalException;

import jakarta.validation.Valid;

public interface UserService {
public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;

public boolean sendOtp(String email) throws Exception;
}
