package backend.controller;

import backend.entity.task;
import backend.repository.taskrepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "*")
public class dashboardcontroller {

    @Autowired
    private taskrepository taskrepository;

    @GetMapping
    public Map<String, Integer> getDashboardData() {

        List<task> tasks = taskrepository.findAll();

        int totalTasks = tasks.size();

        int completedTasks = 0;
        int pendingTasks = 0;
        int overdueTasks = 0;

        LocalDate today = LocalDate.now();

        for(task task : tasks) {

            if(task.getStatus().equalsIgnoreCase("COMPLETED")) {
                completedTasks++;
            }

            if(task.getStatus().equalsIgnoreCase("PENDING")) {
                pendingTasks++;
            }

            if(task.getDueDate() != null) {

                LocalDate dueDate = LocalDate.parse(task.getDueDate());

                if(dueDate.isBefore(today)
                        && !task.getStatus().equalsIgnoreCase("COMPLETED")) {

                    overdueTasks++;
                }
            }
        }

        Map<String, Integer> dashboard = new HashMap<>();

        dashboard.put("totalTasks", totalTasks);
        dashboard.put("completedTasks", completedTasks);
        dashboard.put("pendingTasks", pendingTasks);
        dashboard.put("overdueTasks", overdueTasks);

        return dashboard;
    }
}