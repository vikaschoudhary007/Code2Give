package com.code2Give.Backend.service;

import com.code2Give.Backend.model.Objective;
import org.springframework.stereotype.Service;

import java.util.List;

public interface IObjectiveService {

    public List<Objective> getAllObjectives();

    public Objective saveObjective(Objective objective);
}
