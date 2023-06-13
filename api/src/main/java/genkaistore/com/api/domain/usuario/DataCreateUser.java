package genkaistore.com.api.domain.usuario;

import genkaistore.com.api.domain.endereco.DataEndereco;
import genkaistore.com.api.domain.endereco.Endereco;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record DataCreateUser(
        @NotBlank
        String nome,
        @NotBlank
        String sobrenome,
        @NotBlank
        @Email
        String login,
        @NotBlank
        String senha,

        @Pattern(regexp = "\\d{11}")
        String cpf,

        String telefone,

        DataEndereco endereco
) {
}
