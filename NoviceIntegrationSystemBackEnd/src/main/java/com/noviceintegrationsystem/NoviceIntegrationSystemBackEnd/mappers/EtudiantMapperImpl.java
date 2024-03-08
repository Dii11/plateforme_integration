package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.mappers;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.CommentaireDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.EtudiantDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.ForumDiscussionDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.MentionDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.Commentaire;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.Etudiant;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.ForumDiscussion;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.Mention;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class EtudiantMapperImpl {
    public MentionDTO fromMention(Mention mention) {
        MentionDTO mentionDTO = new MentionDTO();
        BeanUtils.copyProperties(mention, mentionDTO);
        return mentionDTO;
    }

    public Mention fromMentionDTO(MentionDTO mentionDTO) {
        Mention mention = new Mention();
        BeanUtils.copyProperties(mentionDTO, mention);
        return mention;
    }

    public EtudiantDTO fromEtudiant(Etudiant etudiant) {
        EtudiantDTO etudiantDTO = new EtudiantDTO();
        BeanUtils.copyProperties(etudiant, etudiantDTO);
        //We get the name of the object class
        return etudiantDTO;
    }

    public Etudiant fromEtudiantDTO(EtudiantDTO etudiantDTO) {
        Etudiant etudiant = new Etudiant();
        BeanUtils.copyProperties(etudiantDTO, etudiant);
        return etudiant;
    }

    public ForumDiscussionDTO fromForumDiscussion(ForumDiscussion forumDiscussion ) {
        ForumDiscussionDTO forumDiscussionDTO = new ForumDiscussionDTO();
        BeanUtils.copyProperties(forumDiscussion, forumDiscussionDTO);
        return forumDiscussionDTO;
    }

    public ForumDiscussion fromForumDiscussionDTO(ForumDiscussionDTO forumDiscussionDTO) {
        ForumDiscussion forumDiscussion = new ForumDiscussion();
        BeanUtils.copyProperties(forumDiscussionDTO, forumDiscussion);
        return forumDiscussion;
    }

    public Commentaire fromCommentaireDTO(CommentaireDTO commentaireDTO) {
        Commentaire commentaire = new Commentaire();
        BeanUtils.copyProperties(commentaireDTO, commentaire);
        return commentaire;
    }

    public CommentaireDTO fromCommentaire(Commentaire commentaire) {
        CommentaireDTO commentaireDTO = new CommentaireDTO();
        BeanUtils.copyProperties(commentaire, commentaireDTO);
        return commentaireDTO;
    }
}
