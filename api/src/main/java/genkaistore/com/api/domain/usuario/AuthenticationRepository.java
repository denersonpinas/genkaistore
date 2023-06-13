package genkaistore.com.api.domain.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface AuthenticationRepository extends JpaRepository<Account, Long> {
    UserDetails findByLogin(String login);
}
