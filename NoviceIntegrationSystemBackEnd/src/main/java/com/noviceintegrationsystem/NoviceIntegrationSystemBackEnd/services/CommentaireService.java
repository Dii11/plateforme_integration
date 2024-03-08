package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.services;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.CommentaireDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.ForumDiscussionDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.ForumDiscussionNotFoundException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface CommentaireService {
   CommentaireDTO saveCommentaire(MultipartFile file, CommentaireDTO commentaireDTO, ForumDiscussionDTO forumDiscussionDTO) throws ForumDiscussionNotFoundException, IOException;
   List<CommentaireDTO> listCommentaire();
   CommentaireDTO updateCommentaire(CommentaireDTO commentaireDTO);
   void deleteCommentaire(Long commentaireId);
}
