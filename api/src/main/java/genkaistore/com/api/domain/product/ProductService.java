package genkaistore.com.api.domain.product;

import genkaistore.com.api.domain.brands.BrandsRepository;
import genkaistore.com.api.domain.department.DataDetailDepartmentDTO;
import genkaistore.com.api.domain.department.DepartmentRepository;
import genkaistore.com.api.domain.product.factory.FactoryProductFigure;
import genkaistore.com.api.domain.product.factory.ProductFigure;
import genkaistore.com.api.domain.product.observer.Publisher;
import genkaistore.com.api.domain.product.proxy.ProxyInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;


@Service
public class ProductService implements ProxyInterface {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private BrandsRepository brandsRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private FactoryProductFigure factoryProductFigure;

    @Autowired
    private Publisher publisher;

    @Transactional
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
        var uri = uriBuilder.path("/product/{id}").buildAndExpand(product.getId()).toUri();
        return ResponseEntity.created(uri).body(new DataDetailProductDTO((ProductFigure) product));
    }

    public ResponseEntity<Page<DataDetailProductDTO>> listProduct(Pageable paginacao) {
        var page = repository.findAllByAtivoTrue(paginacao).map(DataDetailProductDTO::new);
        return  ResponseEntity.ok(page);
    }

    public ResponseEntity detailProduct(Long id) {
        var product = repository.getReferenceById(id);
        return ResponseEntity.ok(new DataDetailProductDTO(product));
    }

    @Transactional
    public ResponseEntity updateProduct(DataUpdateProductDTO data) {
        var product = repository.getReferenceById(data.id());
        product.updateInfors(data);
        var response = ResponseEntity.ok(new DataDetailProductDTO(product));

        if(data.preco() != null) {
            publisher.notifyObserver(product.getId());
        }

        return response;
    }

    @Transactional
    public ResponseEntity removeProduct(Long id) {
        var department = repository.getReferenceById(id);
        department.excluir();
        return ResponseEntity.noContent().build();
    }
}
