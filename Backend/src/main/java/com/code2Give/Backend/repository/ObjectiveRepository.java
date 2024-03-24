package com.code2Give.Backend.repository;

import com.code2Give.Backend.model.Objective;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ObjectiveRepository extends JpaRepository<Objective, Long> {
}
