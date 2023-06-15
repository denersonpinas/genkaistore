package genkaistore.com.api.domain.product;

import genkaistore.com.api.domain.product.factory.Product;
import genkaistore.com.api.domain.product.factory.ProductFigure;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.channels.FileChannel;

public interface ProductRepository extends JpaRepository<ProductFigure, Long> {
    Page<ProductFigure> findAllByAtivoTrue(Pageable paginacao);
}
