package com.workfolio.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "sequence")
@Data
public class Sequence {
	@Id
	private String id;
	private Long seq;
}
