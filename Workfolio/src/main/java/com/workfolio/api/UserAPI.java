package com.workfolio.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workfolio.dto.LoginDTO;
import com.workfolio.dto.ResponseDTO;
import com.workfolio.dto.UserDTO;
import com.workfolio.exception.JobPortalException;
import com.workfolio.service.UserService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/users")
public class UserAPI {
	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws JobPortalException {
		userDTO = userService.registerUser(userDTO);
		return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid LoginDTO loginDTO) throws JobPortalException {

		return new ResponseEntity<>(userService.loginUser(loginDTO), HttpStatus.OK);
	}
	@PostMapping("/changePass")
	public ResponseEntity<ResponseDTO> changePassword(@RequestBody @Valid LoginDTO loginDTO) throws JobPortalException {

		return new ResponseEntity<>(userService.changePassword(loginDTO), HttpStatus.OK);
	}

	@PostMapping("/sendOtp/{email}")
	public ResponseEntity<ResponseDTO> sendOtp(@PathVariable @Email(message="{user.email.invalid}") String email) throws Exception {
		userService.sendOtp(email);
		return new ResponseEntity<>(new ResponseDTO("OTP sent succesfully"), HttpStatus.OK);
	}
	
	@GetMapping("/verifyOtp/{email}/{otp}")
	public ResponseEntity<ResponseDTO> verifyOtp(@PathVariable @Email(message="Email is invalid") String email,@PathVariable @jakarta.validation.constraints.Pattern(regexp="^[0-9]{6}$", message="OTP is invalid" ) String otp) throws JobPortalException {
		userService.verifyOtp(email,otp);
		return new ResponseEntity<>(new ResponseDTO("OTP has been verified"), HttpStatus.OK);
	}
}
