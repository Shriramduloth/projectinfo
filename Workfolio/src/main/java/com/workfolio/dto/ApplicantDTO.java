package com.workfolio.dto;

import java.time.LocalDateTime;

import com.workfolio.entity.Applicant;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicantDTO {
	private String name;
	private String fatherName;
	private LocalDateTime dateOfBirth;
	private String gender;
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

	public Applicant toEntity() {
		return new Applicant(this.name, this.fatherName, this.dateOfBirth, this.gender, this.email,this.phoneNumber,
				this.personalWeb, this.course, this.college, this.university, this.percentage, this.skill1,
				this.profSkill1, this.skill2, this.profSkill2);
	}

}
