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
    public List<Resident> getAllResidents() {
        return residentRepository.findAll();
    }


    // Get a existing resident's info with id
    @Override
    public Resident getResidentById(Long id) {
        Optional<Resident> residentOptional = residentRepository.findById(id);

        if(residentOptional.isPresent()){
            return residentOptional.get();
        }else {
            throw new ResidentNotFoundException("Resident Not Found");
        }
    }

    // Registering a new resident on the platform
    @Override
    public Resident saveResident(Resident resident) throws Exception {

        Resident isExists = residentRepository.findByFirstVisit(resident.isFirstVisit());

        if(isExists != null){
                throw new Exception("Resident already registered");
        }

        return residentRepository.save(resident);
    }

    // Function to remove a particular resident from database - based on id
    @Override
    public void deleteResident(Long id) {

    }

    // Updating the general information of a resident in database

    @Override
    public Resident updateResident(Long id, Resident resident) {

        Resident existingResident = residentRepository.findById(id)
                .orElseThrow(() -> new ResidentNotFoundException("Resident not found with id: " + id));

        // Update the existing resident entity with data from the request DTO
        if(resident.getFirstName() != null){
            existingResident.setFirstName(resident.getFirstName());
        }
        if(resident.getLastName() != null){
            existingResident.setLastName(resident.getLastName());
        }
        if(resident.getPlanStartDate() != null){
            existingResident.setPlanStartDate(resident.getPlanStartDate());
        }
        if(resident.getStartDateOfStay() != null){
            existingResident.setStartDateOfStay(resident.getStartDateOfStay());
        }
        if(resident.getEndDateOfStay() != null){
            existingResident.setEndDateOfStay(resident.getEndDateOfStay());
        }
        if(resident.getPlaceOfAccommodation() != null){
            existingResident.setPlaceOfAccommodation(resident.getPlaceOfAccommodation());
        }

        existingResident.setFirstVisit(resident.isFirstVisit());

        if(resident.getImmigrationStatus() != null){
            existingResident.setImmigrationStatus(resident.getImmigrationStatus());
        }

        existingResident.setWithChildren(resident.isWithChildren());


        if(resident.getChallengesIssues() != null){
            existingResident.setChallengesIssues(resident.getChallengesIssues());
        }
        if(resident.getAge() != 0){
            existingResident.setAge(resident.getAge());
        }

        existingResident.setMonthlyIncome(resident.getMonthlyIncome());


        // Save the updated resident entity

        return residentRepository.save(existingResident);
    }
}
