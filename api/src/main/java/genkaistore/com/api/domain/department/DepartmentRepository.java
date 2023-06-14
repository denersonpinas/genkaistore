package genkaistore.com.api.domain.department;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.channels.FileChannel;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
    Page<Department> findAllByAtivoTrue(Pageable paginacao);
}
