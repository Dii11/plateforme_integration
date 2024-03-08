package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.services;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.EtudiantDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.Etudiant;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.MentionType;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.enums.Parcours;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.EtudiantEmailNotFound;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.EtudiantNotFountException;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.EtudiantPasswordNotFound;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.mappers.EtudiantMapperImpl;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.repositories.EtudiantRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
@Slf4j
public class EtudiantServiceImpl implements EtudiantService {

    private EtudiantRepository etudiantRepository;
    private EtudiantMapperImpl dtoMapper;

    @Override
    public EtudiantDTO saveEtudiant(EtudiantDTO etudiantDTO) {
        log.info("Saving new Etudiant");
        if(etudiantDTO.getParcours() == Parcours.GB || etudiantDTO.getParcours() == Parcours.IG
                || etudiantDTO.getParcours() == Parcours.ASR) {
            etudiantDTO.setMentionType(MentionType.Informatique);
        } else if (etudiantDTO.getParcours() == Parcours.IA || etudiantDTO.getParcours() == Parcours.GID
                || etudiantDTO.getParcours() == Parcours.OCC) {
            etudiantDTO.setMentionType(MentionType.IA);
        } else {
            //Le parcours que l'utilisateur à saisi n'est pas correct
        }

        Etudiant etudiantMap = dtoMapper.fromEtudiantDTO(etudiantDTO);
        Etudiant saveEtudiant = etudiantRepository.save(etudiantMap);
        return dtoMapper.fromEtudiant(saveEtudiant);
    }

    @Override
    public EtudiantDTO getEtudiant(String etudiantId) throws EtudiantNotFountException {
        Etudiant etudiant = etudiantRepository.findById(etudiantId)
                .orElseThrow(() -> new EtudiantNotFountException("Etudiant Not Found"));
        return dtoMapper.fromEtudiant(etudiant);
    }

    @Override
    public List<EtudiantDTO> listEtudiant() {
        List<Etudiant> etudiants = etudiantRepository.findAll();
        List<EtudiantDTO> etudiantDTOS = etudiants.stream()
                .map(etudiant -> dtoMapper.fromEtudiant(etudiant))
                .collect(Collectors.toList());
        return etudiantDTOS;
    }

    @Override
    public EtudiantDTO updateEtudiant(EtudiantDTO etudiantDTO) {
        log.info("Updating Etudiant");
        Etudiant etudiant = dtoMapper.fromEtudiantDTO(etudiantDTO);
        Etudiant saveEtudiant = etudiantRepository.save(etudiant);
        return dtoMapper.fromEtudiant(saveEtudiant);
    }

    @Override
    public void deleteEtudiant(String etudiantId) {
        etudiantRepository.deleteById(etudiantId);
    }

/*    @Override
    public EtudiantDTO authentication(EtudiantDTO etudiantDTO) throws EtudiantPasswordNotFound, EtudiantEmailNotFound {
        List<EtudiantDTO> etudiantDTOS = listEtudiant();
        EtudiantDTO etudiantDTO2 = null;
        for(EtudiantDTO etudiantDTO1 : etudiantDTOS) {
            if (etudiantDTO1.getEmail().equals(etudiantDTO.getEmail())) {
                // L'étudiant existe dans la base de données
                if (etudiantDTO1.getPassword().equals(etudiantDTO.getPassword())) {
                    etudiantDTO2 = etudiantDTO1;
                    break; // Sortir de la boucle car l'utilisateur est trouvé
                } else {
                    throw new EtudiantPasswordNotFound("Password Not Found");
                }
            }
        }

        if (etudiantDTO2 == null) {
            throw new EtudiantEmailNotFound("Email Not Found");
        }

        return etudiantDTO2;
    }*/

/*    public EtudiantDTO autentification(EtudiantDTO etudiantDTO) {
        List<EtudiantDTO> etudiantDTOS = listEtudiant();

    }*/

}
