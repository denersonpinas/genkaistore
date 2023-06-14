package genkaistore.com.api.domain.usuario;

import genkaistore.com.api.domain.endereco.Endereco;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Collection;
import java.util.List;

@Table(name = "account")
@Entity(name = "Account")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Account implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String sobrenome;
    private String login;
    private String senha;
    private String cpf;
    private String telefone;

    @Embedded
    private Endereco endereco;

    private Boolean ativo;

    public Account(DataCreateUser data) {
        this.ativo = true;
        this.nome = data.nome();
        this.sobrenome = data.sobrenome();
        this.login = data.login();
        this.senha = hashSenha(data.senha());
        this.cpf = data.cpf();
        this.telefone = data.telefone();
        this.endereco = new Endereco(data.endereco());
    }

    public String hashSenha(String senha) {
        var encodedPassword = new BCryptPasswordEncoder().encode(senha);
        return encodedPassword;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void updateInfor(DataUpdateAccountDTO data) {
        if(data.nome() != null) {
            this.nome = data.nome();
        }

        if(data.sobrenome() != null) {
            this.sobrenome = data.sobrenome();
        }

        if(data.login() != null) {
            this.login = data.login();
        }

        if(data.senha() != null) {
            this.senha = data.senha();
        }

        if(data.cpf() != null) {
            this.cpf = data.cpf();
        }

        if(data.telefone() != null) {
            this.telefone = data.telefone();
        }

        if(data.endereco() != null) {
            this.endereco.updateInfors(data.endereco());
        }
    }

    public void excluir() {
        this.ativo = false;
    }
}
