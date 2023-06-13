package genkaistore.com.api.domain.usuario;

import genkaistore.com.api.domain.endereco.Endereco;

public record DataDetailUser(Long id, String nome, String sobrenome, String login, String senha, String telefone, String cpf, Endereco endereco) {
    public DataDetailUser(Account account) {
        this(account.getId(), account.getNome(), account.getSobrenome(), account.getLogin(), account.getSenha(), account.getTelefone(), account.getCpf(), account.getEndereco());
    }
}
