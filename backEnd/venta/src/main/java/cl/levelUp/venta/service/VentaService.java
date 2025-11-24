package cl.levelUp.venta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.levelUp.venta.model.Venta;
import cl.levelUp.venta.repository.VentaRepository;
import jakarta.transaction.Transactional;


@Service
@Transactional
public class VentaService {

    @Autowired
    private VentaRepository ventaRepository;

    public List<Venta> findAll() {
        return ventaRepository.findAll();
    }

    public Venta createSale(Venta venta) {
        return ventaRepository.save(venta);
    }


    public Venta guardarVenta(Venta venta) {
        return ventaRepository.save(venta);
    }

}
    

