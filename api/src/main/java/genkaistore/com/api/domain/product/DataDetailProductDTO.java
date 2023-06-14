package genkaistore.com.api.domain.product;


import genkaistore.com.api.domain.brands.Brands;
import genkaistore.com.api.domain.department.Department;
import genkaistore.com.api.domain.product.factory.Product;


public record DataDetailProductDTO(

        String nome,

        String descricao,

        Double preco,

        Integer quantidade,

        Brands marca,

        Department departamento
) {
    public DataDetailProductDTO(Product data) {
        this(data.getNome(), data.getDescricao(), data.getPreco(), data.getQuantidade(), data.getMarca(), data.getDepartamento());
    }
}
