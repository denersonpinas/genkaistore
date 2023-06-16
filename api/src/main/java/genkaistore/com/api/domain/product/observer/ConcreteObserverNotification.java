package genkaistore.com.api.domain.product.observer;

import genkaistore.com.api.domain.product.DataDetailProductDTO;
import genkaistore.com.api.domain.product.ProductRepository;
import genkaistore.com.api.domain.product.factory.ProductFigure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("notification")
public class ConcreteObserverNotification implements ObserverNotification {

    private List<Long> productList = new ArrayList<Long>();

    @Autowired
    private ProductRepository repository;

    @Override
    public void update(Long idProduct) {
        productList.add(idProduct);
    }

    @GetMapping
    @Transactional
    public ResponseEntity listNotification() {

        List<DataDetailProductDTO> productFigures = new ArrayList<DataDetailProductDTO>();
        for(Long idProduct : productList) {
            productFigures.add(new DataDetailProductDTO(repository.getReferenceById(idProduct)));
        }
        productList.clear();
        return ResponseEntity.ok(productFigures);
    }

    public void resetNotification() {
        productList.clear();
    }
}
