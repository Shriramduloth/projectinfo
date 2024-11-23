package com.workfolio.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.workfolio.dto.LoginDTO;
import com.workfolio.dto.UserDTO;
import com.workfolio.entity.OTP;
import com.workfolio.entity.User;
import com.workfolio.exception.JobPortalException;
import com.workfolio.repository.OTPRepository;
import com.workfolio.repository.UserRepository;
import com.workfolio.utility.Utilities;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service(value = "userService")
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private OTPRepository otpRepository;

	@Override
	public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {
		Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());
		if (optional.isPresent())
			throw new JobPortalException("USER_FOUND");
		userDTO.setId(Utilities.getNextSequence("users"));
		userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		User user = userDTO.toEntity();
		user = userRepository.save(user);
		return user.toDTO();
	}

	@Override
	public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException {
		User user = userRepository.findByEmail(loginDTO.getEmail())
				.orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
		if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword()))
			throw new JobPortalException("INVALID_CREDENTIALS");
		return user.toDTO();
	}

	@Override
	public boolean sendOtp(String email) throws Exception {
		userRepository.findByEmail(email).orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
		MimeMessage mm = mailSender.createMimeMessage();
		MimeMessageHelper mesaage = new MimeMessageHelper(mm, true);
		mesaage.setTo(email);
		mesaage.setSubject("Your OTP code");
		String genOTP = Utilities.generateOTP();
		OTP otp = new OTP(email, genOTP, LocalDateTime.now());
		otpRepository.save(otp);
		mesaage.setText("Your Code is : " + genOTP, false);
		mailSender.send(mm);
		return true;
	}
}
