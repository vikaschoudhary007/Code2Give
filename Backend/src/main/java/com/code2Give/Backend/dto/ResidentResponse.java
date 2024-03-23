package com.code2Give.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResidentResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private Date planStartDate;
    private Date startDateOfStay;
    private Date endDateOfStay;
    private String currentAccommodation;
    private boolean firstVisit;
    private String immigrationStatus;
    private boolean withChildren;
    private String challengesIssues;
    private int age;
    private double monthlyIncome;
}
