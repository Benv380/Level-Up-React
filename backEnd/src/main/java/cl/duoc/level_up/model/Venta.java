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
@Table(name= "VENTA")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Venta {
    
    @Id
    private Long id_venta;

    @Column(nullable = false)
    private String fecha_venta;


    @OneToOne
    @JoinColumn(name = "id_empleado")
    private Employee employee;

}
