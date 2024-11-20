package com.agendamento.transferencia.controller;

import com.agendamento.transferencia.model.Transferencia;
import com.agendamento.transferencia.service.TransferenciaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transferencias")
public class TransferenciaController {

    private final TransferenciaService transferenciaService;

    public TransferenciaController(TransferenciaService transferenciaService) {
        this.transferenciaService = transferenciaService;
    }

    @PostMapping("/agendar")
    public ResponseEntity<Transferencia> agendar(@RequestBody Transferencia transferencia) {
        return ResponseEntity.ok(transferenciaService.agendarTransferencia(transferencia));
    }

    @GetMapping("/extrato")
    public ResponseEntity<List<Transferencia>> listar() {
        return ResponseEntity.ok(transferenciaService.listarTransferencias());
    }
}
