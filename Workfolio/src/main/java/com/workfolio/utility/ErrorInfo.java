package com.workfolio.utility;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorInfo {
	
private String errorMessage;
private Integer errorCode;
private LocalDateTime timeStamp;
}
