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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.levelUp.productos.assembler.ProductModelAssembler;
import cl.levelUp.productos.model.Product;
import cl.levelUp.productos.service.ProductService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/catalogo")
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private ProductModelAssembler assembler;

@GetMapping
public ResponseEntity<?> getAllProducts() {
    List<Product> products = productService.getAllProducts();

    if (products.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No products found");
    }

    // convertir cada producto a EntityModel
    List<EntityModel<Product>> productModels = products.stream()
            .map(assembler::toModel)
            .toList();

    // devolver el listado con un self link
    return ResponseEntity.ok(
            CollectionModel.of(
                    productModels,
                    linkTo(methodOn(ProductController.class).getAllProducts()).withSelfRel()
            )
        );
    }
}
