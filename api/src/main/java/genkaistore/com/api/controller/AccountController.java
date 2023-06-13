package genkaistore.com.api.controller;

import genkaistore.com.api.domain.usuario.AccountService;
import genkaistore.com.api.domain.usuario.DataCreateUser;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
}
