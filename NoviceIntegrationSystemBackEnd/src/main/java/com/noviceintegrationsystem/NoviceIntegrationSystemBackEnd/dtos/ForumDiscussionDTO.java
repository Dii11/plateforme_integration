package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.Etudiant;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.Reaction;
import lombok.Data;

import java.util.Date;

@Data
public class ForumDiscussionDTO {
    private Long id;
    private String titre;
    private String contenu;
    private String auteur;
    private Etudiant etudiant;
    private Date publicationDate;
    private Reaction reaction;
    private byte[] publicationType;
}
