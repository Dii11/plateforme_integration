package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.ForumDiscussion;
import lombok.Data;

@Data
public class CommentaireDTO {
    private Long id;
    private String contenue;
    private byte[] typeCommentaire;
    private ForumDiscussion forumDiscussion;
}
