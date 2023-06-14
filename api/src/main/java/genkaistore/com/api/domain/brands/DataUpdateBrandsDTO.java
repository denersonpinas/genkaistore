package genkaistore.com.api.domain.brands;

import jakarta.validation.constraints.NotNull;

public record DataUpdateBrandsDTO(
        @NotNull
        Long id,
        String nome
) {}
