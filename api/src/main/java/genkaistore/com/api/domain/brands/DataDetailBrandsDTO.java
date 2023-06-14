package genkaistore.com.api.domain.brands;

import jakarta.validation.constraints.NotBlank;

public record DataDetailBrandsDTO(String nome,Long id) {
        public DataDetailBrandsDTO(Brands brands){
                this(brands.getNome(),brands.getId());
        }
}
