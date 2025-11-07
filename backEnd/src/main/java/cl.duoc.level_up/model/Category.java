package cl.duoc.level_up.model;


import jakarta.persistence.*;

import javax.naming.Name;

@Entity
@Table(name = "CATEGORIA")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_categoria;

    private String descripcion;
    private String nombre;
}
