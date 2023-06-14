package genkaistore.com.api.domain.department;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class DepartmentService {

    @Autowired
    DepartmentRepository repository;

    @Transactional
    public ResponseEntity<DataDetailDepartmentDTO> addDepartment(DataCreateDepartmentDTO data, UriComponentsBuilder uriBuilder) {
        var department = new Department(data);
        repository.save(department);

        var uri = uriBuilder.path("/department/{id}").buildAndExpand(department.getId()).toUri();
        return ResponseEntity.created(uri).body(new DataDetailDepartmentDTO(department));
    }

    public ResponseEntity<Page<DataDetailDepartmentDTO>> listDepartment(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        var page = repository.findAllByAtivoTrue(paginacao).map(DataDetailDepartmentDTO::new);
        return  ResponseEntity.ok(page);
    }

    public ResponseEntity detailDepartment(Long id){
        var department = repository.getReferenceById(id);
        return ResponseEntity.ok(new DataDetailDepartmentDTO(department));
    }

    @Transactional
    public ResponseEntity updateDepartment(DataUpdateDepartmentDTO data) {
        var department = repository.getReferenceById(data.id());
        department.updateInfors(data);

        return ResponseEntity.ok(new DataDetailDepartmentDTO(department));
    }

    @Transactional
    public ResponseEntity removeDepartment(Long id) {
        var department = repository.getReferenceById(id);
        department.excluir();
        return ResponseEntity.noContent().build();
    }
}
