package com.workfolio.service;

import com.workfolio.dto.LoginDTO;
import com.workfolio.dto.ResponseDTO;
import com.workfolio.dto.UserDTO;
import com.workfolio.exception.JobPortalException;


public interface UserService {
public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;

public boolean sendOtp(String email) throws Exception;

public boolean verifyOtp(String email,String otp) throws JobPortalException;

public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException;
}
