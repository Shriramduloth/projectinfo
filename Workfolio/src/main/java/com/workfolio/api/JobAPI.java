package com.workfolio.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workfolio.dto.ApplicantDTO;
import com.workfolio.exception.JobPortalException;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/applyjob")
public class JobAPI {
	// @Autowired
	//private Jobservice jobservice
	
	
	// @PostMapping("/apply")
	// public ResponseEntity<ApplicantDTO>applyJob(@RequestBody ApplicantDTO applicantDTO) throws JobPortalException 
	// {return new ResponseEntity<>(jobService.applyJob(applicantDTO))}
}
