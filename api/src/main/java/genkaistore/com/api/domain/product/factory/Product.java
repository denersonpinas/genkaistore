package genkaistore.com.api.domain.product.factory;

import genkaistore.com.api.domain.brands.Brands;
import genkaistore.com.api.domain.department.Department;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface Product {
    Long getId();
    String getNome();
    String getDescricao();
    Double getPreco();
    Integer getQuantidade();
    Brands getMarca();
    Department getDepartamento();
}
