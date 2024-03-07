package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.MentionType;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.Parcours;
import lombok.Data;

@Data
public class EtudiantDTO {
    private String id;
    private String name;
    private String email;
    private String password;
    private MentionType mentionType;
    private Parcours parcours;
}
