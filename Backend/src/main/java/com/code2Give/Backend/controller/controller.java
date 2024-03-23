package com.code2Give.Backend.controller;

import com.code2Give.Backend.dto.ResidentRequest;
import com.code2Give.Backend.dto.ResidentResponse;
import com.code2Give.Backend.service.IResidentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/residents")
@RequiredArgsConstructor
public class controller {

    private final IResidentService residentService;

    // API functions to be called from frontend or postman

    // get list of all residents registered on platform
    @GetMapping("")
    public ResponseEntity<List<ResidentResponse>> getAllResidents(){
        return new ResponseEntity<>(residentService.getAllResidents(), HttpStatus.OK);
    }

    // Adding(registration) new resident on intervention plan
    @PostMapping("/register")
    public ResponseEntity<ResidentResponse> registerResident(@RequestBody ResidentRequest residentRequest) throws Exception {
        return new ResponseEntity<>(residentService.saveResident(residentRequest), HttpStatus.CREATED);
    }

    // Fetching data of a particular resident based on id
    @GetMapping("/id/{residentId}")
    public ResponseEntity<ResidentResponse> getResidentById(@PathVariable("residentId") Long residentId){
        return new ResponseEntity<>(residentService.getResidentById(residentId), HttpStatus.OK);
    }

    // Updating resident's profile
    @PutMapping("/update/{id}")
    public ResponseEntity<ResidentResponse> updateResident(@PathVariable("id") Long id, @RequestBody ResidentRequest residentRequest){
        return new ResponseEntity<>(residentService.updateResident(id, residentRequest), HttpStatus.OK);
    }

}
