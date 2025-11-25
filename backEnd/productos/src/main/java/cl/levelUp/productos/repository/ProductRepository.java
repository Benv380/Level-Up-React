package cl.levelUp.productos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cl.levelUp.productos.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

}
