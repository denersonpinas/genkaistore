package genkaistore.com.api.controller;

import genkaistore.com.api.domain.usuario.AccountService;
import genkaistore.com.api.domain.usuario.DataCreateUser;
import genkaistore.com.api.domain.usuario.DataUpdateAccountDTO;
import genkaistore.com.api.infra.security.DadosTokenJWT;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("account")
public class AccountController {

    @Autowired
    AccountService accountService;

    @PostMapping
    public ResponseEntity addUser(@RequestBody @Valid DataCreateUser data, UriComponentsBuilder uriBuilder) {
        return accountService.addUser(data, uriBuilder);
    }

    @GetMapping
    public ResponseEntity detailUser(HttpServletRequest request) {
        return accountService.detailUser(request);
    }

    @PutMapping
    public  ResponseEntity updateUser(@RequestBody @Valid DataUpdateAccountDTO data) {
        return accountService.updateUser(data);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity removeUser(@PathVariable Long id) {
        return accountService.deleteUser(id);
    }
}
