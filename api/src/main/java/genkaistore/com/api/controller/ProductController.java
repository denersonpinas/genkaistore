package genkaistore.com.api.controller;

import genkaistore.com.api.domain.brands.DataDetailBrandsDTO;
import genkaistore.com.api.domain.department.DataUpdateDepartmentDTO;
import genkaistore.com.api.domain.product.DataCreateProductDTO;
import genkaistore.com.api.domain.product.DataDetailProductDTO;
import genkaistore.com.api.domain.product.DataUpdateProductDTO;
import genkaistore.com.api.domain.product.ProductService;
import genkaistore.com.api.domain.product.proxy.ProxyProduct;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("product")
public class ProductController {

    @Autowired
    private ProxyProduct proxyProduct;

    @PostMapping
    public ResponseEntity addProduct(@RequestBody @Valid DataCreateProductDTO data, UriComponentsBuilder uriBuilder) {
        return proxyProduct.addProduct(data, uriBuilder);
    }

    @GetMapping
    public ResponseEntity<Page<DataDetailProductDTO>> listProduct(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        return proxyProduct.listProduct(paginacao);
    }

    @GetMapping("/{id}")
    public ResponseEntity detailProduct(@PathVariable Long id){
        return proxyProduct.detailProduct(id);
    }

    @PutMapping
    public ResponseEntity updateProduct(@RequestBody @Valid DataUpdateProductDTO data) {
        var dto = proxyProduct.updateProduct(data);
        return dto;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity removeProduct(@PathVariable Long id) {
        return proxyProduct.removeProduct(id);
    }
}
