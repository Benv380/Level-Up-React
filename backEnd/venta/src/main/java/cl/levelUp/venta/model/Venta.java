package cl.levelUp.venta.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Entity
@Table(name= "VENTA")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Venta {
    
    @Id
    private Long id_venta;

    @Column(nullable = false)
    private String fecha_venta;


}
