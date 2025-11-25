package cl.levelUp.productos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.levelUp.productos.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}


