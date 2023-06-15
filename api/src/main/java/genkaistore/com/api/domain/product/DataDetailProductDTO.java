package genkaistore.com.api.domain.product;


import genkaistore.com.api.domain.brands.Brands;
import genkaistore.com.api.domain.department.Department;
import genkaistore.com.api.domain.product.factory.Product;
import genkaistore.com.api.domain.product.factory.ProductFigure;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;


public record DataDetailProductDTO(
        Long id,

        String nome,

        String descricao,

        Double preco,

        Integer quantidade,

        String dimenssao,

        UnidadeMedida unidadeMedida,

        String material,

        String peso,

        LocalDateTime data
) {
    public DataDetailProductDTO(ProductFigure data) {
        this(data.getId(),data.getNome(), data.getDescricao(), data.getPreco(), data.getQuantidade(), data.getDimenssao(), data.getUnidadeMedida(), data.getMaterial(), data.getPeso(), data.getData());
    }
}
