package genkaistore.com.api.domain.product;

import genkaistore.com.api.domain.brands.BrandsRepository;
import genkaistore.com.api.domain.department.DepartmentRepository;
import genkaistore.com.api.domain.product.factory.FactoryProductFigure;
import genkaistore.com.api.domain.product.factory.ProductFigure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;


@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private BrandsRepository brandsRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private FactoryProductFigure factoryProductFigure;

    public ResponseEntity addProduct(DataCreateProductDTO data, UriComponentsBuilder uriBuilder) {
        var marca = brandsRepository.getReferenceById(data.idMarca());
        var departamento = departmentRepository.getReferenceById(data.idDepartment());

        var product = factoryProductFigure.createProduct(data, marca, departamento);

//        List<Images> images = new ArrayList<>();
//        for (DataImageDTO imageDTO : data.images()) {
//            Images image = new Images();
//            image.setImages(imageDTO.images());
//            image.setProductFigure(product);
//            images.add(image);
//        }

//        product.setImages(images);
        repository.save((ProductFigure) product);
        var uri = uriBuilder.path("/products/{id}").buildAndExpand(product.getId()).toUri();

        return ResponseEntity.created(uri).body(new DataDetailProductDTO(product));
    }
}
