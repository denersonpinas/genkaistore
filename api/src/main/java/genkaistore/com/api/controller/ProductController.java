package genkaistore.com.api.controller;

import genkaistore.com.api.domain.product.DataCreateProductDTO;
import genkaistore.com.api.domain.product.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
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
}
