package genkaistore.com.api.domain.product.factory;

import genkaistore.com.api.domain.brands.Brands;
import genkaistore.com.api.domain.department.Department;
import genkaistore.com.api.domain.product.DataCreateProductDTO;

public interface FactoryProduct {
    Product createProduct(DataCreateProductDTO data, Brands marca, Department department);
}
