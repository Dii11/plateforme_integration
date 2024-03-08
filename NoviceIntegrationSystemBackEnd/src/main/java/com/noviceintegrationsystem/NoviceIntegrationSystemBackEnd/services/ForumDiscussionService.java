package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.services;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.EtudiantDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.ForumDiscussionDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.EtudiantNotFountException;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ForumDiscussionService {
    ForumDiscussionDTO savePublication(MultipartFile file, ForumDiscussionDTO forumDiscussionDTO, EtudiantDTO etudiantDTO) throws EtudiantNotFountException;
    List<ForumDiscussionDTO> listPublication();
    ForumDiscussionDTO updatePublication(ForumDiscussionDTO forumDiscussionDTO);
    void deletePublication(Long forumDiscussionId);
}
