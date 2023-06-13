package genkaistore.com.api.domain.usuario;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class AccountService {

    @Autowired
    AccountRepository repository;

    @Transactional
    public ResponseEntity addUser(@RequestBody @Valid DataCreateUser data, UriComponentsBuilder uriBuilder) {
        var account = new Account(data);
        repository.save(account);

        var uri = uriBuilder.path("/account/{id}").buildAndExpand(account.getId()).toUri();
        return ResponseEntity.created(uri).body(new DataDetailUser(account));
    }
}
