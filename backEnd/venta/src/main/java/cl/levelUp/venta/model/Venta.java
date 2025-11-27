package cl.levelUp.venta.model;

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
@Table(name = "VENTAS")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_VENTA")
    private Long idventa;

    @Column(name = "ID_USUARIO")
    private Long idusuario;

    @Column(name = "FECHA_VENTA")
    private String fechaventa;

    @Column(name = "TOTAL_VENTA")
    private Double totalVenta;

    @Column(name = "ESTADO")
    private String estado;
}




