package com.code2Give.Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "intervention_plan")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InterventionPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "resident_id")
    private Resident resident;

    @OneToMany(mappedBy = "interventionPlan", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TreatmentTeamMember> treatmentTeam;

    @OneToMany(mappedBy = "interventionPlan", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CommunityService> communityServices;

    @OneToMany(mappedBy = "interventionPlan", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Objective> objectives;
}
