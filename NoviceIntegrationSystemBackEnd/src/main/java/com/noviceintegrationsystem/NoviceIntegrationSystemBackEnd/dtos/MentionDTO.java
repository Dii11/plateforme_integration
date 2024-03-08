package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.MentionType;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.Parcours;
import lombok.Data;

@Data
public class MentionDTO {
    private Long id;
    private MentionType mentionType;
    private Parcours parcours;
}
