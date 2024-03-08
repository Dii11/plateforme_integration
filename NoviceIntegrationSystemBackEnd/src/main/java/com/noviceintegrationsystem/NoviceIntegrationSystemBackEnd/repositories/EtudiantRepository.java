package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.repositories;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtudiantRepository extends JpaRepository<Etudiant, String> {

}
