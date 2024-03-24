package com.code2Give.Backend.service;

import com.code2Give.Backend.model.Objective;
import com.code2Give.Backend.repository.ObjectiveRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ObjectiveServiceImpl implements IObjectiveService{

    private final ObjectiveRepository objectiveRepository;
    @Override
    public List<Objective> getAllObjectives() {
        return objectiveRepository.findAll();
    }

    @Override
    public Objective saveObjective(Objective objective) {
        return objectiveRepository.save(objective);
    }
}
