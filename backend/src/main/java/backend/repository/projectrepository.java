package backend.repository;

import backend.entity.project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface projectrepository extends JpaRepository<project, Long> {
}