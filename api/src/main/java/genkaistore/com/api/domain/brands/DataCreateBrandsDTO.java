package genkaistore.com.api.domain.brands;

import jakarta.validation.constraints.NotBlank;

public record DataCreateBrandsDTO(
        @NotBlank
        String nome
) {
}
