package backend.repository;

import backend.entity.task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface taskrepository extends JpaRepository<task, Long> {
}