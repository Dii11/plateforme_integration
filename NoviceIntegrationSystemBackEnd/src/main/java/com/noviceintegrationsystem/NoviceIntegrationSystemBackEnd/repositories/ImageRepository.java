package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.repositories;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

}
