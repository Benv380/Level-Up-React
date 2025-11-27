package cl.levelUp.productos.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import cl.levelUp.productos.model.Product;
import cl.levelUp.productos.repository.ProductRepository;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class ProductService {

    private final ProductRepository productRepository;

    // mejor por constructor
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // LISTAR TODOS
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // OBTENER 1 POR ID
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    // CREAR
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    // ACTUALIZAR
    public Optional<Product> updateProduct(Long id, Product detalles) {
        return productRepository.findById(id).map(p -> {
            p.setNombre(detalles.getNombre());
            p.setDescripcion(detalles.getDescripcion());
            p.setPrecio(detalles.getPrecio());
            return productRepository.save(p);
        });
    }

    // ELIMINAR
    public boolean deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            return false;
        }
        productRepository.deleteById(id);
        return true;
    }
}
