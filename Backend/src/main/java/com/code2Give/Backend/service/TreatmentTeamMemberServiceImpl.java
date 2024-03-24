package com.code2Give.Backend.service;

import com.code2Give.Backend.model.TreatmentTeamMember;
import com.code2Give.Backend.repository.TreatmentTeamMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TreatmentTeamMemberServiceImpl implements ITreatmentTeamMemberService{

    private  final TreatmentTeamMemberRepository treatmentTeamMemberRepository;
    @Override
    public List<TreatmentTeamMember> getAllTreatmentTeamMembers() {
        return treatmentTeamMemberRepository.findAll();
    }

    @Override
    public TreatmentTeamMember saveTreatmentTeamMember(TreatmentTeamMember treatmentTeamMember) {
        return treatmentTeamMemberRepository.save(treatmentTeamMember);
    }
}
