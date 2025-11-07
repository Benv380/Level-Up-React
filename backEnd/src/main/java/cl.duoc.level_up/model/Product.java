package cl.duoc.level_up.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name= "PRODUCTO")
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

    @OneToOne
    @JoinColumn(name = "ID_CATEGORIA")
    private Category category;

}
