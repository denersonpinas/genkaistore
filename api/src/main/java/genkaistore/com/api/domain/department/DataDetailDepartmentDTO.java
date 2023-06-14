package genkaistore.com.api.domain.department;

public record DataDetailDepartmentDTO(Long id, String nome, Long idSUbDepartment) {
    public DataDetailDepartmentDTO(Department department) {
        this(department.getId(), department.getNome(), department.getIdSubDepartment());
    }
}
