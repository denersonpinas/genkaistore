package genkaistore.com.api.domain.brands;

import genkaistore.com.api.domain.usuario.DataUpdateAccountDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "brands")
@Entity(name = "Brands")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Brands {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Boolean ativo;

    public Brands(DataCreateBrandsDTO dto){

        this.nome = dto.nome();
        this.ativo = true;
    }
    public void updateInfor(DataUpdateBrandsDTO dto) {
        if(dto.nome() != null) {
            this.nome = dto.nome();
        }
    }
}
