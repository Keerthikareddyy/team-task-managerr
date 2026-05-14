package backend.entity;

import jakarta.persistence.*;

@Entity
public class task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String status;

    private String dueDate;

    @ManyToOne
    private user assignedUser;

    @ManyToOne
    private project project;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public user getAssignedUser() {
        return assignedUser;
    }

    public void setAssignedUser(user assignedUser) {
        this.assignedUser = assignedUser;
    }

    public project getProject() {
        return project;
    }

    public void setProject(project project) {
        this.project = project;
    }
}