package genkaistore.com.api.domain.product.proxy;

import genkaistore.com.api.domain.product.DataCreateProductDTO;
import genkaistore.com.api.domain.product.DataDetailProductDTO;
import genkaistore.com.api.domain.product.DataUpdateProductDTO;
import genkaistore.com.api.domain.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProxyProduct implements  ProxyInterface{

    private List<ResponseEntity> commonProducts = new ArrayList<ResponseEntity>();

    @Autowired
    private ProductService productService;

    @Override
    public ResponseEntity addProduct(DataCreateProductDTO data, UriComponentsBuilder uriBuilder) {
        return productService.addProduct(data, uriBuilder);
    }

    @Override
    public ResponseEntity<Page<DataDetailProductDTO>> listProduct(Pageable paginacao) {
        return productService.listProduct(paginacao);
    }

    @Override
    public ResponseEntity detailProduct(Long id) {
        for(ResponseEntity response : commonProducts) {
            DataDetailProductDTO productDTO = (DataDetailProductDTO) response.getBody();
            if(productDTO.id() == id) {
                return response;
            }
        }

        var dto = productService.detailProduct(id);
        commonProducts.add(dto);
        return dto;
    }

    @Override
    public ResponseEntity updateProduct(DataUpdateProductDTO data) {
        return productService.updateProduct(data);
    }

    @Override
    public ResponseEntity removeProduct(Long id) {
        return productService.removeProduct(id);
    }
}
