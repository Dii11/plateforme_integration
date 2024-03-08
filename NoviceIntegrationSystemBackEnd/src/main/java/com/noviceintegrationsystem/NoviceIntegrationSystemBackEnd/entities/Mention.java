package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.MentionType;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.Parcours;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Mention {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private MentionType mentionType;
    @Enumerated(EnumType.STRING)
    private Parcours parcours;
    @OneToMany(mappedBy = "mention")
    private List<Etudiant> etudiants;
}
