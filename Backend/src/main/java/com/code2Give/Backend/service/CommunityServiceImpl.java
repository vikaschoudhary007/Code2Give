package com.code2Give.Backend.service;

import com.code2Give.Backend.model.CommunityService;
import com.code2Give.Backend.repository.CommunityServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommunityServiceImpl implements ICommunityService{

    private final CommunityServiceRepository communityServiceRepository;
    @Override
    public List<CommunityService> getAllCommunityServices() {
        return communityServiceRepository.findAll();
    }

    @Override
    public CommunityService saveCommunityService(CommunityService communityService) {
        return communityServiceRepository.save(communityService);
    }
}
