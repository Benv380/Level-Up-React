package cl.levelUp.venta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.levelUp.venta.model.Venta;
import cl.levelUp.venta.service.VentaService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;




@RestController
@RequestMapping("/ventas")

public class VentaController {
    
    @Autowired
    private VentaService ventaService;

    @GetMapping
    public ResponseEntity<List<Venta>> getAll() {
        List<Venta> ventas = ventaService.findAll();
        
        if (ventas.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(ventas);
        }
    }
    
    @PostMapping
    public ResponseEntity<?> createSale(@RequestBody Venta venta) {
        Venta newSale = ventaService.createSale(venta);
        if (newSale == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Sale could not be created.");
        } else {
            return ResponseEntity.status(HttpStatus.CREATED).body(newSale);
        }
    }

}
