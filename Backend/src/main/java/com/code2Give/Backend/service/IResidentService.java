package com.code2Give.Backend.service;

import com.code2Give.Backend.dto.ResidentRequest;
import com.code2Give.Backend.dto.ResidentResponse;
import com.code2Give.Backend.model.Resident;
import com.code2Give.Backend.repository.ResidentRepository;

import java.util.List;

public interface IResidentService {
    List<ResidentResponse> getAllResidents();
    ResidentResponse getResidentById(Long id);
    ResidentResponse saveResident(ResidentRequest residentRequest) throws Exception;
    void deleteResident(Long id);
    ResidentResponse updateResident(Long id, ResidentRequest residentRequest);
}
