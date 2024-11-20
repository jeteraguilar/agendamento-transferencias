package com.agendamento.transferencia.service;

import com.agendamento.transferencia.model.Transferencia;
import com.agendamento.transferencia.repository.TransferenciaRepository;
import com.agendamento.transferencia.util.CalculadorDeTaxas;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Service
public class TransferenciaService {

    private final TransferenciaRepository transferenciaRepository;

    public TransferenciaService(TransferenciaRepository transferenciaRepository) {
        this.transferenciaRepository = transferenciaRepository;
    }

    public Transferencia agendarTransferencia(Transferencia transferencia) {
        // Validar datas
        if (transferencia.getDataTransferencia().before(new Date())) {
            throw new IllegalArgumentException("A data da transferência não pode ser no passado.");
        }

        // Calcular taxa
        BigDecimal taxa = CalculadorDeTaxas.calcularTaxa(
                transferencia.getValor(),
                transferencia.getDataAgendamento(),
                transferencia.getDataTransferencia()
        );

        transferencia.setTaxa(taxa);
        return transferenciaRepository.save(transferencia);
    }

    public List<Transferencia> listarTransferencias() {
        return transferenciaRepository.findAll();
    }
}
