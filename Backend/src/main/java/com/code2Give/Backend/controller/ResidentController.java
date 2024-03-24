package com.code2Give.Backend.controller;

import com.code2Give.Backend.dto.ResidentRequest;
import com.code2Give.Backend.dto.ResidentResponse;
import com.code2Give.Backend.model.Resident;
import com.code2Give.Backend.service.IResidentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/residents")
@RequiredArgsConstructor
public class ResidentController {

    private final IResidentService residentService;

    // API functions to be called from frontend or postman

    // get list of all residents registered on platform
    @GetMapping("")
    public ResponseEntity<List<Resident>> getAllResidents(){
        return new ResponseEntity<>(residentService.getAllResidents(), HttpStatus.OK);
    }

    // Adding(registration) new resident on intervention plan
    @PostMapping("/register")
    public ResponseEntity<Resident> registerResident(@RequestBody Resident resident) throws Exception {
        return new ResponseEntity<>(residentService.saveResident(resident), HttpStatus.CREATED);
    }

    // Fetching data of a particular resident based on id
    @GetMapping("/id/{residentId}")
    public ResponseEntity<Resident> getResidentById(@PathVariable("residentId") Long residentId){
        return new ResponseEntity<>(residentService.getResidentById(residentId), HttpStatus.OK);
    }

    // Updating resident's profile
    @PutMapping("/update/{id}")
    public ResponseEntity<Resident> updateResident(@PathVariable("id") Long id, @RequestBody Resident resident){
        return new ResponseEntity<>(residentService.updateResident(id, resident), HttpStatus.OK);
    }

}
