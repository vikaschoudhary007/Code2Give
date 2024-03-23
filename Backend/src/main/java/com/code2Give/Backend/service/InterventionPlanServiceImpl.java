package com.code2Give.Backend.service;

import com.code2Give.Backend.model.CommunityService;
import com.code2Give.Backend.model.InterventionPlan;
import com.code2Give.Backend.model.Resident;
import com.code2Give.Backend.model.TreatmentTeamMember;
import com.code2Give.Backend.repository.InterventionPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class InterventionPlanServiceImpl implements IInterventionPlanService{

    private final InterventionPlanRepository interventionPlanRepository;
    private final ICommunityService communityServiceService;
    private final ITreatmentTeamMemberService treatmentTeamMemberService;
    private final IResidentService residentService;

    @Override
    public List<InterventionPlan> getAllInterventionPlans() {
        List<InterventionPlan> interventionPlans =  interventionPlanRepository.findAll();

        return interventionPlans;
    }

    @Override
    public InterventionPlan getInterventionPlanById(Long id) throws Exception {
        return interventionPlanRepository.findById(id)
                .orElseThrow(() -> new Exception("Intervention plan not found with id: " + id));
    }

    @Override
    public InterventionPlan createInterventionPlan(InterventionPlan interventionPlan) throws Exception {

        // Ensure that the associated Resident object is properly persisted
        Resident resident = interventionPlan.getResident();
        if (resident != null) {
            // Save or update the Resident entity before saving the InterventionPlan
            resident = residentService.saveResident(resident);
            interventionPlan.setResident(resident);
        }

        // Create and save related entities first
        List<CommunityService> communityServices = interventionPlan.getCommunityServices();
        if (communityServices != null) {
            for (CommunityService communityService : communityServices) {
                communityServiceService.saveCommunityService(communityService);
            }
        }

        List<TreatmentTeamMember> treatmentTeamMembers = interventionPlan.getTreatmentTeam();
        if (treatmentTeamMembers != null) {
            for (TreatmentTeamMember teamMember : treatmentTeamMembers) {
                treatmentTeamMemberService.saveTreatmentTeamMember(teamMember);
            }
        }

        // Save the InterventionPlan entity after related entities are created
        return interventionPlanRepository.save(interventionPlan);
    }

    @Override
    public InterventionPlan updateInterventionPlan(Long id, InterventionPlan updatedInterventionPlan) throws Exception {

        Optional<InterventionPlan> existingInterventionPlanOptional = interventionPlanRepository.findById(id);

        if (existingInterventionPlanOptional.isPresent()) {
            InterventionPlan existingInterventionPlan = existingInterventionPlanOptional.get();

            // Update existingInterventionPlan with data from updatedInterventionPlan

            existingInterventionPlan.setResident(updatedInterventionPlan.getResident());
            existingInterventionPlan.setTreatmentTeam(updatedInterventionPlan.getTreatmentTeam());
            existingInterventionPlan.setCommunityServices(updatedInterventionPlan.getCommunityServices());
            existingInterventionPlan.setObjectives(updatedInterventionPlan.getObjectives());
            // Save the updated intervention plan
            return interventionPlanRepository.save(existingInterventionPlan);

        } else {
            throw new Exception("Intervention plan not found with id: " + id);
        }
    }

    @Override
    public void deleteInterventionPlan(Long id) throws Exception {

        Optional<InterventionPlan> interventionPlanOptional = interventionPlanRepository.findById(id);
        if (interventionPlanOptional.isPresent()) {
            InterventionPlan interventionPlan = interventionPlanOptional.get();
            interventionPlanRepository.delete(interventionPlan);
        } else {
            throw new Exception("Intervention plan not found with id: " + id);
        }
    }
}
