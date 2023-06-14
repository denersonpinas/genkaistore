package genkaistore.com.api.domain.department;

import jakarta.validation.constraints.NotNull;

public record DataCreateDepartmentDTO(
        @NotNull
        String nome,
        Long idSubDepartment) {
}
