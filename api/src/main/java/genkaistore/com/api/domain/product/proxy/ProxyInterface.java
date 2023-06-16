package genkaistore.com.api.domain.product.proxy;

import genkaistore.com.api.domain.product.DataCreateProductDTO;
import genkaistore.com.api.domain.product.DataDetailProductDTO;
import genkaistore.com.api.domain.product.DataUpdateProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

public interface ProxyInterface {

    ResponseEntity addProduct(DataCreateProductDTO data, UriComponentsBuilder uriBuilder);

    ResponseEntity<Page<DataDetailProductDTO>> listProduct(Pageable paginacao);

    ResponseEntity detailProduct(Long id);

    ResponseEntity updateProduct(DataUpdateProductDTO data);

    ResponseEntity removeProduct(Long id);
}
