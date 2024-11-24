package com.workfolio.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workfolio.dto.ApplicantDTO;
import com.workfolio.exception.JobPortalException;
import com.workfolio.service.JobService;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/applicantDetails")
public class JobAPI {
	@Autowired
	private JobService jobService;

	@PostMapping("/applyjob")
	public ResponseEntity<ApplicantDTO> applyJob(@RequestBody ApplicantDTO applicantDTO) throws JobPortalException {
		applicantDTO = jobService.applyJob(applicantDTO);
		return new ResponseEntity<>(applicantDTO, HttpStatus.CREATED);
	}
}
