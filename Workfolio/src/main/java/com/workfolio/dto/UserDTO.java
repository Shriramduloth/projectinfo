package com.workfolio.dto;
import com.workfolio.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

	private Long id;
	@NotBlank(message="Name is null or blank")
	private String name;
	@NotBlank(message="Email is null or blank")
	@Email(message="Email is invalid")
	private String email;
	@NotBlank(message="Password is null or blank")
	@Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,15}$",message="Password is invalid.")
	private String password;
	
	
	public User toEntity() {
		return new User(this.id,this.name,this.email,this.password);
	}
}
