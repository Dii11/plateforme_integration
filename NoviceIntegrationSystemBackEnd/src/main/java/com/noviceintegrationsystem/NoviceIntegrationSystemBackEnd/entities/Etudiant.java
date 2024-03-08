package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.MentionType;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.Parcours;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Etudiant {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    @ManyToOne
    private Mention mention;
    @OneToMany(mappedBy = "etudiant")
    private List<ForumDiscussion> forumDiscussions;
    private MentionType mentionType;
    private Parcours parcours;
}
