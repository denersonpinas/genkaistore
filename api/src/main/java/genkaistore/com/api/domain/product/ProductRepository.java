package genkaistore.com.api.domain.product;

import genkaistore.com.api.domain.product.factory.Product;
import genkaistore.com.api.domain.product.factory.ProductFigure;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductFigure, Long> {
}
