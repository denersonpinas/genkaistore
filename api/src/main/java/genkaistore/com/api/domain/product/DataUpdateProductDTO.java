package genkaistore.com.api.domain.product;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record DataUpdateProductDTO(
        @NotNull
        Long id,

        String nome,

        String descricao,

        Double preco,

        Integer quantidade,

        String dimenssao,

        UnidadeMedida unidadeMedida,

        String material,

        String peso
) {
}
