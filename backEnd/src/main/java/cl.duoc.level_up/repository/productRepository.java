package cl.duoc.level_up.repository;

import cl.duoc.level_up.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface productRepository extends JpaRepository<Product,Long> {

}
