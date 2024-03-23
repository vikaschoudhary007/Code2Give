package com.code2Give.Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "community_servie")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommunityService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String contact;
    private String phone;
    private String mission;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "intervention_plan_id")
    private InterventionPlan interventionPlan;

    // Getters and setters
}
