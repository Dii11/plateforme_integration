package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.Reaction;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class ForumDiscussion {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String contenu;
    private String auteur;
    private Date publicationDate;
    @Lob
    private byte[] publicationType;
    @ManyToOne
    private Etudiant etudiant;
    @OneToMany(mappedBy = "forumDiscussion")
    private List<Commentaire> commentaires;
    @Enumerated(EnumType.STRING)
    private Reaction reaction;
}
