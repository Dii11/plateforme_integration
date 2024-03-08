package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Commentaire {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String contenue;
    private byte[] typeCommentaire;
    @ManyToOne
    private ForumDiscussion forumDiscussion;
}
