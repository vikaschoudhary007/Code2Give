package com.code2Give.Backend.service;

import com.code2Give.Backend.dto.ResidentRequest;
import com.code2Give.Backend.dto.ResidentResponse;
import com.code2Give.Backend.model.Resident;
import com.code2Give.Backend.repository.ResidentRepository;

import java.util.List;

public interface IResidentService {
    List<Resident> getAllResidents();
    Resident getResidentById(Long id);
    Resident saveResident(Resident resident) throws Exception;
    void deleteResident(Long id);
    Resident updateResident(Long id, Resident resident);
}
