package com.workfolio.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.workfolio.dto.ApplicantDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "application")
public class Applicant {
	private String name;
	private String fatherName;
	private LocalDateTime dateOfBirth;
	private String gender;
	@Id
	private String email;
	private String phoneNumber;
	private String personalWeb;
	private String course;
	private String college;
	private String university;
	private String percentage;
	private String skill1;
	private String profSkill1;
	private String skill2;
	private String profSkill2;
	
	public ApplicantDTO toDTO() {
		return new ApplicantDTO(this.name, this.fatherName, this.dateOfBirth, this.gender,this.email, this.phoneNumber,
				this.personalWeb, this.course, this.college, this.university, this.percentage, this.skill1,
				this.profSkill1, this.skill2, this.profSkill2);
	}
	
}
