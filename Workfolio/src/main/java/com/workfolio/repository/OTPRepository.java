package com.workfolio.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.workfolio.entity.OTP;

public interface OTPRepository extends MongoRepository<OTP,String> {

     
}