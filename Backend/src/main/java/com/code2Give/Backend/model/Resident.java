package com.code2Give.Backend.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Entity
@Table(name = "resident")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Resident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "plan_start_date")
    private Date planStartDate;

    @Column(name = "start_date_of_stay")
    private Date startDateOfStay;

    @Column(name = "end_date_of_stay")
    private Date endDateOfStay;

    @Column(name = "current_accommodation")
    private String currentAccommodation;

    @Column(name = "first_visit")
    private boolean firstVisit;

    @Column(name = "immigration_status")
    private String immigrationStatus;

    @Column(name = "with_children")
    private boolean withChildren;

    @Column(name = "challenges_issues")
    private String challengesIssues;

    @Column(name = "age")
    private int age;

    @Column(name = "monthly_income")
    private double monthlyIncome;


}
