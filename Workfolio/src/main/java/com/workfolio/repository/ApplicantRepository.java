package com.workfolio.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.workfolio.entity.Applicant;
@Repository
public interface ApplicantRepository extends MongoRepository<Applicant,String> {
	public Optional<Applicant> findByEmail(String email);
}