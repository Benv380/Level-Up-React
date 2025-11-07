package cl.duoc.level_up.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.duoc.level_up.model.Venta;
import cl.duoc.level_up.repository.VentaRepository;
import jakarta.transaction.Transactional;


@Service
@Transactional
public class VentaService {

    @Autowired
    private VentaRepository ventaRepository;

    public List<Venta> findAll() {
        return ventaRepository.findAll();
    }


}
    

