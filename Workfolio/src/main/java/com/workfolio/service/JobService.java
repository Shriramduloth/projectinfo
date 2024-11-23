package com.workfolio.service;

import com.workfolio.dto.ApplicantDTO;
import com.workfolio.exception.JobPortalException;

public interface JobService {
	public ApplicantDTO applyJob(ApplicantDTO applicantDTO) throws JobPortalException;
}
