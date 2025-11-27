package cl.levelUp.venta.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.levelUp.venta.model.Venta;
import cl.levelUp.venta.service.VentaService;
import org.springframework.web.bind.annotation.RequestBody;



@CrossOrigin(origins = "http://localhost:3000")
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
    public ResponseEntity<?> crearVenta(@RequestBody Venta venta) {

        venta.setFechaventa(LocalDate.now().toString());
        venta.setEstado("PAGADO");

        Venta guardada = ventaService.guardarVenta(venta);
        return ResponseEntity.ok(guardada);
    }


}
