package cl.levelUp.productos.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "PRODUCTOS")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PRODUCTO")
    private Long id_producto;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private Double precio;

    @Column(nullable = false)
    private String descripcion;

    @JsonProperty("imagenUrl")
    public String getImagenUrl() {
        if (id_producto == null) {
            return null;
        }

        return switch (id_producto.intValue()) {
            case 1 -> "http://localhost:8080/img/Catan.jpeg";
            case 2 -> "http://localhost:8080/img/Carcasonne.jpeg";
            case 3 -> "http://localhost:8080/img/Controlador xbox.jpeg";
            case 4 -> "http://localhost:8080/img/Audifonos.jpeg";   
            case 5 -> "http://localhost:8080/img/Playstation5.jpeg";   
            case 6 -> "http://localhost:8080/img/Computador ASUS.jpeg";
            case 7 -> "http://localhost:8080/img/Silla gamer.jpeg";
            case 8 -> "http://localhost:8080/img/Mouse gamer.jpeg";
            case 9 -> "http://localhost:8080/img/Mousepag gamer.jpeg";
            case 10 -> "http://localhost:8080/img/Polera LevelUp.jpeg";
            case 26 -> "http://localhost:8080/img/bizcochito.jpeg";
            default -> null;
        }; 
    }
}
