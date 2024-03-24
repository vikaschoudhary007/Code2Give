package com.code2Give.Backend.service;

import com.code2Give.Backend.model.CommunityService;
import com.code2Give.Backend.model.Objective;

import java.util.List;

public interface ICommunityService {

    public List<CommunityService> getAllCommunityServices();

    public CommunityService saveCommunityService(CommunityService communityService);
}
