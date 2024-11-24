package com.workfolio.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.workfolio.dto.LoginDTO;
import com.workfolio.dto.ResponseDTO;
import com.workfolio.dto.UserDTO;
import com.workfolio.entity.OTP;
import com.workfolio.entity.User;
import com.workfolio.exception.JobPortalException;
import com.workfolio.repository.OTPRepository;
import com.workfolio.repository.UserRepository;
import com.workfolio.utility.Data;
import com.workfolio.utility.Utilities;


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
		mesaage.setText(Data.getMessageBody(genOTP), true);
		mailSender.send(mm);
		return true;
	}

	@Override
	public boolean verifyOtp(String email, String otp) throws JobPortalException {
		OTP otpEntity = otpRepository.findById(email).orElseThrow(() -> new JobPortalException("OTP_NOT_FOUND"));
		if (!otpEntity.getOtpCode().equals(otp))
			throw new JobPortalException("OTP_INCORRECT");
		return true;
	}

	@Override
	public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException {
		User user=userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
		user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
		userRepository.save(user);
		return new ResponseDTO("Password changed succesfully");
	}

	@Scheduled(fixedRate = 3000)
	public void removeExpiredOTPs(){
		LocalDateTime expiry =LocalDateTime.now().minusMinutes(5);
		List<OTP>expiredOTPs =otpRepository.findByCreationTimeBefore(expiry);
		if(!expiredOTPs.isEmpty()){
			otpRepository.deleteAll(expiredOTPs);
			System.out.println("Removed "+expiredOTPs.size()+"expired Otps");
		}
	}
}
