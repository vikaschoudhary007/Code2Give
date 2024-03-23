package com.code2Give.Backend.service;

import com.code2Give.Backend.model.Objective;
import com.code2Give.Backend.model.TreatmentTeamMember;

import java.util.List;

public interface ITreatmentTeamMemberService {

    public List<TreatmentTeamMember> getAllTreatmentTeamMembers();

    public TreatmentTeamMember saveTreatmentTeamMember(TreatmentTeamMember treatmentTeamMember);
}
