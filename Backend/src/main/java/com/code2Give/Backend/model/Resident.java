package com.code2Give.Backend.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.util.List;

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

    @Column(name = "place_of_accommodation")
    private String placeOfAccommodation;

    @Column(name = "first_visit")
    private boolean firstVisit;

    @Column(name = "immigration_status")
    private String immigrationStatus;

    @Column(name = "native")
    private boolean isNative;

    @Column(name = "veteran")
    private boolean veteran;

    @Column(name = "with_children")
    private boolean withChildren;

    @Column(name = "exit_orientation")
    private String exitOrientation;

    @Column(name = "challenges_issues")
    private String challengesIssues;

    @Column(name = "age")
    private int age;

    @Column(name = "borough")
    private String borough;

    @Column(name = "monthly_income")
    private double monthlyIncome;

    @Column(name = "caregivers")
    private String caregivers;

    @Column(name = "significant_persons")
    private String significantPersons;

}
