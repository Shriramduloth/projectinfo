package com.workfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class WorkfolioApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorkfolioApplication.class, args);
	}

}
