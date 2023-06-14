package genkaistore.com.api.domain.department;

import jakarta.validation.constraints.NotNull;

public record DataUpdateDepartmentDTO(
        @NotNull
        Long id,
        String nome,
        Long idSubDepartment
) {
}
