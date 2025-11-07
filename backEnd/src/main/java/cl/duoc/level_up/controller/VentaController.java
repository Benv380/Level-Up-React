package cl.duoc.level_up.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.duoc.level_up.model.Venta;
import cl.duoc.level_up.service.VentaService;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/ventas")

public class VentaController {
    
    @Autowired
    private VentaService ventaService;

    @GetMapping("path")
    public ResponseEntity<List<Venta>> getAll() {
        List<Venta> ventas = ventaService.findAll();
        
        if (ventas.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(ventas);
        }

    }
    

}
