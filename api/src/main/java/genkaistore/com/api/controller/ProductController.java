package genkaistore.com.api.controller;

import genkaistore.com.api.domain.brands.DataDetailBrandsDTO;
import genkaistore.com.api.domain.department.DataUpdateDepartmentDTO;
import genkaistore.com.api.domain.product.DataCreateProductDTO;
import genkaistore.com.api.domain.product.DataDetailProductDTO;
import genkaistore.com.api.domain.product.DataUpdateProductDTO;
import genkaistore.com.api.domain.product.ProductService;
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
    private ProductService productService;

    @PostMapping
    public ResponseEntity addProduct(@RequestBody @Valid DataCreateProductDTO data, UriComponentsBuilder uriBuilder) {
        return productService.addProduct(data, uriBuilder);
    }

    @GetMapping
    public ResponseEntity<Page<DataDetailProductDTO>> listProduct(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        return productService.listProduct(paginacao);
    }

    @GetMapping("/{id}")
    public ResponseEntity detailProduct(@PathVariable Long id){
        return productService.detailProduct(id);
    }

    @PutMapping
    public ResponseEntity updateProduct(@RequestBody @Valid DataUpdateProductDTO data) {
        System.out.println("AQUIIII");
        return productService.updateProduct(data);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity removeProduct(@PathVariable Long id) {
        return productService.removeProduct(id);
    }
}
