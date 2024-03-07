package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.services;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.CommentaireDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.ForumDiscussionDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.Commentaire;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.ForumDiscussion;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.ForumDiscussionNotFoundException;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.mappers.EtudiantMapperImpl;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.repositories.CommentaireRepository;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.repositories.ForumDiscussionRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional @AllArgsConstructor
@Slf4j
public class CommentaireServiceImpl implements  CommentaireService{
    private ForumDiscussionRepository forumDiscussionRepository;
    private CommentaireRepository commentaireRepository;
    EtudiantMapperImpl dtoMapper;
    @Override
    public CommentaireDTO saveCommentaire(MultipartFile file, CommentaireDTO commentaireDTO, ForumDiscussionDTO forumDiscussionDTO) throws ForumDiscussionNotFoundException, IOException {
        ForumDiscussion forumDiscussion = forumDiscussionRepository.findById(forumDiscussionDTO.getId())
                .orElse(null);

        if(forumDiscussionDTO == null) {
            throw new ForumDiscussionNotFoundException("ForumDiscussion Not Found");
        }
        Commentaire commentaire = new Commentaire();
        commentaire.setContenue(commentaireDTO.getContenue());
        commentaire.setTypeCommentaire(file.getBytes());
        Commentaire saveCommentaire = commentaireRepository.save(commentaire);
        return dtoMapper.fromCommentaire(saveCommentaire);
    }

    @Override
    public List<CommentaireDTO> listCommentaire() {
        List<Commentaire> commentaires = commentaireRepository.findAll();
        List<CommentaireDTO> commentaireDTOS = commentaires.stream()
                .map(commentaire -> dtoMapper.fromCommentaire(commentaire))
                .collect(Collectors.toList());
        return commentaireDTOS;
    }

    @Override
    public CommentaireDTO updateCommentaire(CommentaireDTO commentaireDTO) {
        log.info("Updating Commentaire");
        Commentaire commentaire = dtoMapper.fromCommentaireDTO(commentaireDTO);
        Commentaire saveCommentaire = commentaireRepository.save(commentaire);
        return dtoMapper.fromCommentaire(saveCommentaire);
    }

    @Override
    public void deleteCommentaire(Long commentaireId) {
        commentaireRepository.deleteById(commentaireId);
    }
}
