package com.code2Give.Backend.controller;

import com.code2Give.Backend.model.InterventionPlan;
import com.code2Give.Backend.model.Resident;
import com.code2Give.Backend.service.IInterventionPlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/interventions")
@RequiredArgsConstructor
public class InterventionPlanController {

    private final IInterventionPlanService interventionPlanService;

    // API functions to be called from frontend or postman

    // get list of all intervention plans
    @GetMapping("")
    public ResponseEntity<List<InterventionPlan>> getAllInterventionPlans(){
        return new ResponseEntity<>(interventionPlanService.getAllInterventionPlans(), HttpStatus.OK);
    }

    // Adding(registration) new resident on intervention plan
    @PostMapping("/create")
    public ResponseEntity<InterventionPlan> createInterventionPlan(@RequestBody InterventionPlan interventionPlan) throws Exception {
        return new ResponseEntity<>(interventionPlanService.createInterventionPlan(interventionPlan), HttpStatus.CREATED);
    }

    // Fetching data of a particular resident based on id
    @GetMapping("/id/{planId}")
    public ResponseEntity<InterventionPlan> getInterventionPlanById(@PathVariable("planId") Long planId) throws Exception {
        return new ResponseEntity<>(interventionPlanService.getInterventionPlanById(planId), HttpStatus.OK);
    }

    // Updating resident's profile
    @PutMapping("/update/{id}")
    public ResponseEntity<InterventionPlan> updateInterventionPlan(@PathVariable("id") Long id, @RequestBody InterventionPlan interventionPlan) throws Exception {
        return new ResponseEntity<>(interventionPlanService.updateInterventionPlan(id, interventionPlan), HttpStatus.OK);
    }
}
