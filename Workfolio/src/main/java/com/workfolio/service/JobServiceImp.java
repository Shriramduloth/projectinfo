package com.workfolio.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.workfolio.dto.ApplicantDTO;
import com.workfolio.entity.Applicant;
import com.workfolio.exception.JobPortalException;
import com.workfolio.repository.ApplicantRepository;
import com.workfolio.utility.Utilities;
@Service(value="jobService")
public class JobServiceImp implements JobService {
	@Autowired
	private ApplicantRepository applicantRepository;
	

	@Override
	public ApplicantDTO applyJob(ApplicantDTO applicantDTO) throws JobPortalException {
		Optional<Applicant> optional=applicantRepository.findByEmail(applicantDTO.getEmail());
		if(optional.isPresent()) throw new JobPortalException("FORM_ACCEPTED");

		Applicant applicant = applicantDTO.toEntity();
		applicant = applicantRepository.save(applicant);
		return applicant.toDTO();
	}
}
