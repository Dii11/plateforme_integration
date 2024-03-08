package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.web;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.EtudiantDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.ForumDiscussionDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.EtudiantNotFountException;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.services.ForumDiscussionService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class ForumDiscussionRestController {
    private ForumDiscussionService forumDiscussionService;

    @GetMapping("/forumDiscussions")
    public List<ForumDiscussionDTO> listPublications() {
        return forumDiscussionService.listPublication();
    }

    @PostMapping("/forumDiscussions")
    public ForumDiscussionDTO saveForumDiscussion(@RequestParam("file") MultipartFile file, @RequestBody ForumDiscussionDTO forumDiscussionDTO, @RequestBody EtudiantDTO etudiantDTO) throws EtudiantNotFountException {
        return forumDiscussionService.savePublication(file, forumDiscussionDTO, etudiantDTO);
    }

    @PutMapping("/forumDiscussions/{forumDiscussionId}")
    public ForumDiscussionDTO updateDiscussion(@PathVariable Long forumDiscussionId, @RequestBody ForumDiscussionDTO forumDiscussionDTO) {
        forumDiscussionDTO.setId(forumDiscussionId);
        return forumDiscussionService.updatePublication(forumDiscussionDTO);
    }

    @DeleteMapping("/forumDiscussions/{id}")
    public void deleteForumDiscussion(@PathVariable Long id) {
        forumDiscussionService.deletePublication(id);
    }
}
