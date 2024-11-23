package com.workfolio.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.workfolio.entity.Applicant;

public interface ApplicantRepository extends MongoRepository<Applicant,Integer> {
		public Optional<Applicant> findByEmail(String email);
	}
