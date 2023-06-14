package genkaistore.com.api.controller;


import genkaistore.com.api.domain.department.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("department")
public class DepartmentController {

    @Autowired
    DepartmentService departmentService;

    @PostMapping
    public ResponseEntity<DataDetailDepartmentDTO> addDepartment(@RequestBody @Valid DataCreateDepartmentDTO data, UriComponentsBuilder uriBuilder) {
        return departmentService.addDepartment(data, uriBuilder);
    }

    @GetMapping
    public ResponseEntity<Page<DataDetailDepartmentDTO>> listDepartment(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        return departmentService.listDepartment(paginacao);
    }

    @GetMapping("/{id}")
    public ResponseEntity detailDepartment(@PathVariable Long id){
        return departmentService.detailDepartment(id);
    }

    @PutMapping
    public ResponseEntity updateDepartment(@RequestBody @Valid DataUpdateDepartmentDTO data) {
        return departmentService.updateDepartment(data);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity removeDepartment(@PathVariable Long id) {
        return departmentService.removeDepartment(id);
    }
}
