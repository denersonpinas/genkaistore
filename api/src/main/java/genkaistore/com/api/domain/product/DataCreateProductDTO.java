package genkaistore.com.api.domain.product;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record DataCreateProductDTO(
        @NotBlank
        String nome,
        @NotBlank
        String descricao,
        @NotNull
        Double preco,
        @NotNull
        Integer quantidade,
        @NotNull
        Long idMarca,
        @NotNull
        Long idDepartment,
        @NotBlank
        String dimenssao,
        @NotNull
        UnidadeMedida unidadeMedida,
        @NotBlank
        String material,
        @NotBlank
        String peso,
        @NotNull
        LocalDateTime data

) {
}
