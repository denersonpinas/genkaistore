package genkaistore.com.api.domain.product.factory;

import genkaistore.com.api.domain.brands.Brands;
import genkaistore.com.api.domain.department.Department;
import genkaistore.com.api.domain.product.DataCreateProductDTO;
import genkaistore.com.api.domain.product.UnidadeMedida;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Table(name = "product_figure")
@Entity(name = "ProductFigure")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class ProductFigure implements Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;
    private Double preco;
    private Integer quantidade;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "marca_id")
    private Brands marca;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "departamento_id")
    private Department departamento;

    private String dimenssao;

    private UnidadeMedida unidadeMedida;

    private String material;
    private String peso;
    private LocalDateTime data;
    private Boolean ativo;

    public ProductFigure(DataCreateProductDTO data, Brands marca, Department department) {
        this.nome = data.nome();
        this.descricao = data.descricao();
        this.preco = data.preco();
        this.quantidade = data.quantidade();
        this.marca = marca;
        this.departamento = department;
        this.dimenssao = data.dimenssao();
        this.unidadeMedida = data.unidadeMedida();
        this.material = data.material();
        this.peso = data.peso();
        this.data = data.data();

    }


    @Override
    public String getNome() {
        return this.nome;
    }

    @Override
    public String getDescricao() {
        return this.descricao;
    }

    @Override
    public Double getPreco() {
        return this.preco;
    }

    @Override
    public Integer getQuantidade() {
        return this.quantidade;
    }

    @Override
    public Brands getMarca() {
        return this.marca;
    }

    @Override
    public Department getDepartamento() {
        return this.departamento;
    }
}
