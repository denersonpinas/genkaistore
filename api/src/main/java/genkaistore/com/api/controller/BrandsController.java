package genkaistore.com.api.controller;

import genkaistore.com.api.domain.brands.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/brands")
public class BrandsController {

    @Autowired
    private BrandsRepository brandsRepository;

    @PostMapping
    @Transactional
    public ResponseEntity addBrands(@RequestBody DataCreateBrandsDTO dto, UriComponentsBuilder uriBuilder){
        Brands brands = new Brands(dto);
        brandsRepository.save(brands);

        var uri = uriBuilder.path("/brands/{id}").buildAndExpand(brands.getId()).toUri();
        return ResponseEntity.created(uri).body(new DataDetailBrandsDTO(brands));
    };
    @GetMapping
    public ResponseEntity<Page<DataDetailBrandsDTO>> listBrands(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        var page = brandsRepository.findAllByAtivoTrue(paginacao).map(DataDetailBrandsDTO::new);
        return ResponseEntity.ok(page);
    }
    @GetMapping("/{id}")
    public ResponseEntity detailBrands(@PathVariable Long id){
        Brands brand = brandsRepository.getById(id);

        return ResponseEntity.ok(new DataDetailBrandsDTO(brand));
    };
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity removeBrands(@PathVariable Long id){
        brandsRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    };
    @PutMapping
    @Transactional
    public ResponseEntity updateBrands(@RequestBody @Valid DataUpdateBrandsDTO dto){
        var brand = brandsRepository.getReferenceById(dto.id());
        brand.updateInfor(dto);

        return ResponseEntity.ok(new DataDetailBrandsDTO(brand));

    }
}
