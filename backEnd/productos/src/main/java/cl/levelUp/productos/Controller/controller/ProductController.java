package cl.levelUp.productos.Controller.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.levelUp.productos.assembler.ProductModelAssembler;
import cl.levelUp.productos.model.Product;
import cl.levelUp.productos.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/catalogo")
@Tag(name = "Catálogo", description = "Operaciones sobre el catálogo de productos")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductModelAssembler assembler;

    // GET /catalogo  (YA LO TENÍAS)
    @Operation(summary = "Obtener todos los productos")
    @GetMapping
    public ResponseEntity<?> getAllProducts() {
        List<Product> products = productService.getAllProducts();

        if (products.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No products found");
        }

        List<EntityModel<Product>> productModels = products.stream()
                .map(assembler::toModel)
                .toList();

        return ResponseEntity.ok(
                CollectionModel.of(
                        productModels,
                        linkTo(methodOn(ProductController.class).getAllProducts()).withSelfRel()
                )
        );
    }




    // POST /catalogo
    @Operation(summary = "Crear un nuevo producto")
    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody Product product) {
        Product creado = productService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(assembler.toModel(creado));
    }

    // PUT /catalogo/{id}
    @Operation(summary = "Actualizar un producto existente")
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id,
        @RequestBody Product product) {

        var updatedOpt = productService.updateProduct(id, product);

        if (updatedOpt.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("No se pudo actualizar. Producto no encontrado con id " + id);
    }

    var actualizado = updatedOpt.get();
    return ResponseEntity.ok(assembler.toModel(actualizado));
}

    // DELETE /catalogo/{id}
    @Operation(summary = "Eliminar un producto")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        boolean eliminado = productService.deleteProduct(id);
        if (!eliminado) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No se pudo eliminar. Producto no encontrado con id " + id);
        }
        return ResponseEntity.noContent().build();
    }
}
