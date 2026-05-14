package backend.controller;

import backend.entity.task;
import backend.repository.taskrepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "*")
public class taskcontroller {

    @Autowired
    private taskrepository taskrepository;

    @PostMapping
    public task createTask(@RequestBody task task) {

        return taskrepository.save(task);
    }

    @GetMapping
    public List<task> getAllTasks() {

        return taskrepository.findAll();
    }

    @PutMapping("/{id}/status")
    public task updateStatus(@PathVariable Long id,
                             @RequestBody task updatedTask) {

        Optional<task> optionalTask = taskrepository.findById(id);

        if(optionalTask.isPresent()) {

            task existingTask = optionalTask.get();

            existingTask.setStatus(updatedTask.getStatus());

            return taskrepository.save(existingTask);
        }

        return null;
    }
}