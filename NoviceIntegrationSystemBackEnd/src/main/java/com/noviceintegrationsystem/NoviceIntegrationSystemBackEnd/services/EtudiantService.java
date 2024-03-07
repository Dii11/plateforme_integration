package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.services;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.EtudiantDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.Parcours;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.EtudiantEmailNotFound;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.EtudiantNotFountException;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.EtudiantPasswordNotFound;

import java.util.List;

public interface EtudiantService {
    EtudiantDTO saveEtudiant(EtudiantDTO etudiantDTO);
    EtudiantDTO getEtudiant(String etudiantId) throws EtudiantNotFountException;
    List<EtudiantDTO> listEtudiant();
    EtudiantDTO updateEtudiant(EtudiantDTO etudiantDTO);
    void deleteEtudiant(String etudiantId);


    //Login method
/*    EtudiantDTO authentication(EtudiantDTO etudiantDTO) throws EtudiantPasswordNotFound, EtudiantEmailNotFound;*/
}
