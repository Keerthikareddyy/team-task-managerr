package backend.controller;

import backend.entity.project;
import backend.repository.projectrepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "*")
public class projectcontroller {

    @Autowired
    private projectrepository projectrepository;

    @PostMapping
    public project createProject(@RequestBody project project) {

        return projectrepository.save(project);
    }

    @GetMapping
    public List<project> getAllProjects() {

        return projectrepository.findAll();
    }
}