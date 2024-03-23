package com.code2Give.Backend.service;

import com.code2Give.Backend.dto.ResidentRequest;
import com.code2Give.Backend.dto.ResidentResponse;
import com.code2Give.Backend.exceptions.ResidentNotFoundException;
import com.code2Give.Backend.model.Resident;
import com.code2Give.Backend.repository.ResidentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ResidentServiceImpl implements IResidentService{

    private final ResidentRepository residentRepository;

    // Get the list of all residents registered with non-profit
    @Override
    public List<ResidentResponse> getAllResidents() {
        List<Resident> residents = residentRepository.findAll();
        return residents.stream().map(this::mapToResidentResponse).toList();
    }


    // Get a existing resident's info with id
    @Override
    public ResidentResponse getResidentById(Long id) {
        Optional<Resident> residentOptional = residentRepository.findById(id);

        if(residentOptional.isPresent()){
            Resident resident = residentOptional.get();
            return mapToResidentResponse(resident);
        }else {
            throw new ResidentNotFoundException("Resident Not Found");
        }
    }

    // Registering a new resident on the platform
    @Override
    public ResidentResponse saveResident(ResidentRequest residentRequest) throws Exception {

        Resident isExists = residentRepository.findByFirstVisit(residentRequest.isFirstVisit());

        if(isExists != null){
                throw new Exception("Resident already registered");
        }

        Resident newResident = mapToResident(residentRequest);

        Resident savedResident = residentRepository.save(newResident);

        return mapToResidentResponse(savedResident);
    }

    // Function to remove a particular resident from database - based on id
    @Override
    public void deleteResident(Long id) {

    }

    // Updating the general information of a resident in database

    @Override
    public ResidentResponse updateResident(Long id, ResidentRequest residentRequest) {

        Resident existingResident = residentRepository.findById(id)
                .orElseThrow(() -> new ResidentNotFoundException("Resident not found with id: " + id));

        // Update the existing resident entity with data from the request DTO
        if(residentRequest.getFirstName() != null){
            existingResident.setFirstName(residentRequest.getFirstName());
        }
        if(residentRequest.getLastName() != null){
            existingResident.setLastName(residentRequest.getLastName());
        }
        if(residentRequest.getPlanStartDate() != null){
            existingResident.setPlanStartDate(residentRequest.getPlanStartDate());
        }
        if(residentRequest.getStartDateOfStay() != null){
            existingResident.setStartDateOfStay(residentRequest.getStartDateOfStay());
        }
        if(residentRequest.getEndDateOfStay() != null){
            existingResident.setEndDateOfStay(residentRequest.getEndDateOfStay());
        }
        if(residentRequest.getCurrentAccommodation() != null){
            existingResident.setCurrentAccommodation(residentRequest.getCurrentAccommodation());
        }

        existingResident.setFirstVisit(residentRequest.isFirstVisit());

        if(residentRequest.getImmigrationStatus() != null){
            existingResident.setImmigrationStatus(residentRequest.getImmigrationStatus());
        }

        existingResident.setWithChildren(residentRequest.isWithChildren());


        if(residentRequest.getChallengesIssues() != null){
            existingResident.setChallengesIssues(residentRequest.getChallengesIssues());
        }
        if(residentRequest.getAge() != 0){
            existingResident.setAge(residentRequest.getAge());
        }

        existingResident.setMonthlyIncome(residentRequest.getMonthlyIncome());


        // Save the updated resident entity
        Resident updatedResident = residentRepository.save(existingResident);

        // Convert the updated entity to DTO and return
        return mapToResidentResponse(updatedResident);
    }

    ////////////// Helper Functions to change entity objects to data transmission objects and vice-versa ///////////////

    private ResidentResponse mapToResidentResponse(Resident resident){
        return ResidentResponse.builder()
                .id(resident.getId())
                .firstName(resident.getFirstName())
                .lastName(resident.getLastName())
                .planStartDate(resident.getPlanStartDate())
                .startDateOfStay(resident.getStartDateOfStay())
                .endDateOfStay(resident.getEndDateOfStay())
                .currentAccommodation(resident.getCurrentAccommodation())
                .firstVisit(resident.isFirstVisit())
                .immigrationStatus(resident.getImmigrationStatus())
                .withChildren(resident.isWithChildren())
                .challengesIssues(resident.getChallengesIssues())
                .age(resident.getAge())
                .monthlyIncome(resident.getMonthlyIncome())
                .build();
    }

    private Resident mapToResident(ResidentRequest residentRequest){
        return Resident.builder()
                .firstName(residentRequest.getFirstName())
                .lastName(residentRequest.getLastName())
                .planStartDate(residentRequest.getPlanStartDate())
                .startDateOfStay(residentRequest.getStartDateOfStay())
                .endDateOfStay(residentRequest.getEndDateOfStay())
                .currentAccommodation(residentRequest.getCurrentAccommodation())
                .firstVisit(residentRequest.isFirstVisit())
                .immigrationStatus(residentRequest.getImmigrationStatus())
                .withChildren(residentRequest.isWithChildren())
                .challengesIssues(residentRequest.getChallengesIssues())
                .age(residentRequest.getAge())
                .monthlyIncome(residentRequest.getMonthlyIncome())
                .build();
    }
}
