package genkaistore.com.api.domain.department;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Table(name = "department")
@Entity(name = "Department")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;

    private Long idSubDepartment;
    private Boolean ativo;

    public Department(DataCreateDepartmentDTO data) {
        this.nome = data.nome();
        this.idSubDepartment = data.idSubDepartment();
    }

    public void excluir() {
        this.ativo = false;
    }

    public void updateInfors(DataUpdateDepartmentDTO data) {
        if(data.nome() != null) {
            this.nome = data.nome();
        }

        if(data.idSubDepartment() != null) {
            this.idSubDepartment = data.idSubDepartment();
        }
    }
}
