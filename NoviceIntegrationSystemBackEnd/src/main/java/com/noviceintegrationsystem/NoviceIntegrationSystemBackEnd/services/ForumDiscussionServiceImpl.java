package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.services;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.EtudiantDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.ForumDiscussionDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.Etudiant;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.ForumDiscussion;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.Reaction;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.EtudiantNotFountException;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.mappers.EtudiantMapperImpl;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.repositories.EtudiantRepository;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.repositories.ForumDiscussionRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
@Slf4j
public class ForumDiscussionServiceImpl implements ForumDiscussionService {
    private EtudiantRepository etudiantRepository;
    private ForumDiscussionRepository forumDiscussionRepository;
    private EtudiantMapperImpl dtoMapper;
    @Override
    public ForumDiscussionDTO savePublication(MultipartFile file, ForumDiscussionDTO forumDiscussionDTO, EtudiantDTO etudiantDTO) throws EtudiantNotFountException {
        log.info("Saving new ForumDiscussion");
        Etudiant etudiant =  etudiantRepository.findById(etudiantDTO.getId())
                .orElse(null);

        if(etudiant == null) {
            throw new EtudiantNotFountException("Etudiant Not Found");
        }

        ForumDiscussion forumDiscussion = new ForumDiscussion();
        forumDiscussion.setTitre(forumDiscussionDTO.getTitre());
        forumDiscussion.setContenu(forumDiscussionDTO.getContenu());
        forumDiscussion.setAuteur(forumDiscussionDTO.getAuteur());
        forumDiscussion.setPublicationDate(new Date());

        if(forumDiscussionDTO.getReaction() == Reaction.DISLIKE) {
            forumDiscussion.setReaction(Reaction.DISLIKE);
        } else {
            forumDiscussion.setReaction(Reaction.LIKE);
        }

        ForumDiscussion saveForumDiscussion = forumDiscussionRepository.save(forumDiscussion);
        return dtoMapper.fromForumDiscussion(saveForumDiscussion);
    }

    @Override
    public List<ForumDiscussionDTO> listPublication() {
        List<ForumDiscussion> forumDiscussions = forumDiscussionRepository.findAll();
        List<ForumDiscussionDTO> forumDiscussionDTOS = forumDiscussions.stream()
                .map(forumDiscussion -> dtoMapper.fromForumDiscussion(forumDiscussion))
                .collect(Collectors.toList());
        return forumDiscussionDTOS;
    }

    @Override
    public ForumDiscussionDTO updatePublication(ForumDiscussionDTO forumDiscussionDTO) {
        log.info("Updating ForumDiscussion");
        ForumDiscussion forumDiscussion = dtoMapper.fromForumDiscussionDTO(forumDiscussionDTO);
        ForumDiscussion saveForumDiscussion = forumDiscussionRepository.save(forumDiscussion);
        return dtoMapper.fromForumDiscussion(saveForumDiscussion);
    }

    @Override
    public void deletePublication(Long forumDiscussionId) {
        forumDiscussionRepository.deleteById(forumDiscussionId);
    }
}
