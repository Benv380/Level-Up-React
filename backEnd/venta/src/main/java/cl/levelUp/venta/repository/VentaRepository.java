package cl.levelUp.venta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cl.levelUp.venta.model.Venta;



public interface VentaRepository extends JpaRepository<Venta, Long> {

}
