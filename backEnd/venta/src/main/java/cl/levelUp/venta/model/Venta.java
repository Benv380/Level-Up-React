package cl.levelUp.venta.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Entity
@Table(name = "VENTA")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Venta {

    @Id
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "venta_sequence"
    )
    @SequenceGenerator(
        name = "venta_sequence",
        sequenceName = "VENTA_SEQ",
        allocationSize = 1
    )
    @Column(name = "id_venta")
    private Long idventa;

    @Column(name = "fecha_venta")
    private String fechaventa;

    @Column(name = "id_empleado")
    private Long idempleado;
}



