package com.code2Give.Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "treatment_team_member")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TreatmentTeamMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String role;
    private String name;
    private String address;
    private String phone;
    private String email;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "intervention_plan_id")
    private InterventionPlan interventionPlan;
}
