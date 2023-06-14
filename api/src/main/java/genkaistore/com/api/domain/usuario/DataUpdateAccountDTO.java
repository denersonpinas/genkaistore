package genkaistore.com.api.domain.usuario;

import genkaistore.com.api.domain.endereco.DataEndereco;
import jakarta.validation.constraints.NotNull;

public record DataUpdateAccountDTO(
        @NotNull
        Long id,

        String nome,

        String sobrenome,

        String login,

        String senha,

        String cpf,

        String telefone,

        DataEndereco endereco
) {
}
