package com.agendamento.transferencia.service;

import com.agendamento.transferencia.model.Transferencia;
import com.agendamento.transferencia.repository.TransferenciaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransferenciaService {

    private final TransferenciaRepository transferenciaRepository;

    public TransferenciaService(TransferenciaRepository transferenciaRepository) {
        this.transferenciaRepository = transferenciaRepository;
    }

    public List<Transferencia> listarTransferencias() {
        return transferenciaRepository.findAll();
    }
}
