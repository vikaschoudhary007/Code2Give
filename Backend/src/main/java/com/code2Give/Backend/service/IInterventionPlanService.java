package com.code2Give.Backend.service;

import com.code2Give.Backend.model.InterventionPlan;

import java.util.List;

public interface IInterventionPlanService {

    List<InterventionPlan> getAllInterventionPlans();

    InterventionPlan getInterventionPlanById(Long id) throws Exception;

    InterventionPlan createInterventionPlan(InterventionPlan interventionPlan) throws Exception;

    InterventionPlan updateInterventionPlan(Long id, InterventionPlan updatedInterventionPlan) throws Exception;

    void deleteInterventionPlan(Long id) throws Exception;
}


