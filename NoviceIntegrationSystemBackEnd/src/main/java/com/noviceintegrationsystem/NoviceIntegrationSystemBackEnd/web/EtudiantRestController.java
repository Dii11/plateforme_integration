package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.web;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.EtudiantDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.services.EtudiantService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class EtudiantRestController {
    private EtudiantService etudiantService;

    @GetMapping("/etudiants")
    public List<EtudiantDTO> etudiants() {
        return etudiantService.listEtudiant();
    }

    @PostMapping("/etudiants")
    public EtudiantDTO saveEtudiant(@RequestBody EtudiantDTO etudiantDTO) {
        return etudiantService.saveEtudiant(etudiantDTO);
    }

    @PutMapping("/etudiants/{etudiantId}")
    public EtudiantDTO updateEtudiant(@PathVariable String etudiantId, @RequestBody EtudiantDTO etudiantDTO) {
        etudiantDTO.setId(etudiantId);
        return etudiantService.updateEtudiant(etudiantDTO);
    }

    @DeleteMapping("/etudiants/{id}")
    public void deleteEtudiant(@PathVariable String id) {
        etudiantService.deleteEtudiant(id);
    }
}
