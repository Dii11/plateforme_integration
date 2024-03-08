package com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.web;

import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.CommentaireDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.dtos.ForumDiscussionDTO;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.exceptions.ForumDiscussionNotFoundException;
import com.noviceintegrationsystem.NoviceIntegrationSystemBackEnd.services.CommentaireService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class CommentaireRestController {
    private CommentaireService commentaireService;

    @GetMapping("/commentaires")
    public List<CommentaireDTO> listCommentaires() {
        return commentaireService.listCommentaire();
    }

    @PostMapping("/commentaires")
    public CommentaireDTO saveCommentaire(@RequestBody MultipartFile file, @RequestBody CommentaireDTO commentaireDTO, @RequestBody ForumDiscussionDTO forumDiscussionDTO) throws ForumDiscussionNotFoundException, IOException {
        return commentaireService.saveCommentaire(file, commentaireDTO, forumDiscussionDTO);
    }

    @PutMapping("/commentaires/{commentaireId}")
    public CommentaireDTO updateCommentaire(@PathVariable Long commentaireId, @RequestBody CommentaireDTO commentaireDTO) {
        commentaireDTO.setId(commentaireId);
        return commentaireService.updateCommentaire(commentaireDTO);
    }

    @DeleteMapping("/commentaires/{id}")
    public void deleteCommentaire(@PathVariable Long id) {
        commentaireService.deleteCommentaire(id);
    }
}
