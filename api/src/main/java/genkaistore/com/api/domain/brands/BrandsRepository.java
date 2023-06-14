package genkaistore.com.api.domain.brands;

import genkaistore.com.api.domain.usuario.Account;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BrandsRepository extends JpaRepository<Brands, Long> {

    Page<Brands> findAllByAtivoTrue(Pageable paginacao);
}
