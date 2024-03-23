package com.code2Give.Backend.repository;

import com.code2Give.Backend.model.Resident;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidentRepository extends JpaRepository<Resident, Long> {

    // Function to check if the resident is already registered or not
    public Resident findByFirstVisit(Boolean isFirstVisit);
}
