package genkaistore.com.api.domain.product.factory;

import genkaistore.com.api.domain.brands.Brands;
import genkaistore.com.api.domain.department.Department;
import genkaistore.com.api.domain.product.DataCreateProductDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FactoryProductFigure implements FactoryProduct {

    @Override
    public Product createProduct(DataCreateProductDTO data, Brands marca, Department department) {
        return new ProductFigure(data, marca, department);
    }
}
