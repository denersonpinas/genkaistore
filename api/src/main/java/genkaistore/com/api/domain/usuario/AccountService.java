package genkaistore.com.api.domain.usuario;

import genkaistore.com.api.infra.security.DadosTokenJWT;
import genkaistore.com.api.infra.security.TokenService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class AccountService {

    @Autowired
    private TokenService tokenService;

    @Autowired
    AccountRepository repository;

    @Transactional
    public ResponseEntity addUser(@RequestBody @Valid DataCreateUser data, UriComponentsBuilder uriBuilder) {
        var account = new Account(data);
        repository.save(account);

        var uri = uriBuilder.path("/account/{id}").buildAndExpand(account.getId()).toUri();
        return ResponseEntity.created(uri).body(new DataDetailUser(account));
    }

    @Transactional
    public ResponseEntity detailUser(HttpServletRequest request) {
        var token = recuperarToken(request);

        if(token != null) {
            var subject = tokenService.getSubject(token);
            var usuario = repository.findByLogin(subject);

            return ResponseEntity.ok(new DataDetailUser(usuario));
        }
        return null;
    }

    @Transactional
    public  ResponseEntity<DataDetailUser> updateUser(DataUpdateAccountDTO data) {
        var account = repository.getReferenceById(data.id());
        account.updateInfor(data);

        return ResponseEntity.ok(new DataDetailUser(account));
    }

    public ResponseEntity deleteUser(Long id) {
        var account = repository.getReferenceById(id);
        account.excluir();
        return ResponseEntity.noContent().build();
    }

    private String recuperarToken(HttpServletRequest request) {
        var authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null) {
            return authorizationHeader.replace("Bearer ", "");
        }

        return null;
    }
}
