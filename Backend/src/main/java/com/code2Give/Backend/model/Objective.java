package com.code2Give.Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "objective")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Objective {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String term;
    private String status;
    private String means;
    private String healthDeterminants;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "intervention_plan_id")
    private InterventionPlan interventionPlan;
}