package cl.levelUp.venta.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
    @Column(name = "id_venta")
    private Long idventa;

    @Column(name = "id_usuario")
    private Long idusuario;

    @Column(name = "fecha_venta")
    private String fechaventa;

}



