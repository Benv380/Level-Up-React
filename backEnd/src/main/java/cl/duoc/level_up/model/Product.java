package cl.duoc.level_up.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name= "PRODUCTOS")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Product {

    @Id
    private Long id_producto;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String codigo;

    @Column(nullable = false)
    private Double precio;

    @Column(nullable = false)
    private String descripcion;

    @OneToOne
    @JoinColumn(name = "ID_CATEGORIA")
    private Category category;

}
