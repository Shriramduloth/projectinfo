package com.workfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.workfolio.dto.ApplicantDTO;
import com.workfolio.entity.Applicant;
import com.workfolio.exception.JobPortalException;
import com.workfolio.repository.ApplicantRepository;

@Service(value="jobService")
public class JobServiceImp implements JobService {
	@Autowired
	private ApplicantRepository applicantRepository;
	

	@Override
	public ApplicantDTO applyJob(ApplicantDTO applicantDTO) throws JobPortalException {
		Applicant applicant =applicantDTO.toEntity();
		applicantRepository.save(applicant);
		return applicant.toDTO();
	}


}
