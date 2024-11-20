package com.agendamento.transferencia.util;

import java.math.BigDecimal;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class CalculadorDeTaxas {

    public static BigDecimal calcularTaxa(BigDecimal valor, Date dataAgendamento, Date dataTransferencia) {

        long diffMillis = dataTransferencia.getTime() - dataAgendamento.getTime();
        long dias = TimeUnit.DAYS.convert(diffMillis, TimeUnit.MILLISECONDS);

        BigDecimal taxa;
        if (dias == 0) {
            taxa = valor.multiply(BigDecimal.valueOf(0.025)).add(BigDecimal.valueOf(3));
        } else if (dias <= 10) {
            taxa = valor.multiply(BigDecimal.valueOf(0));
        } else if (dias <= 20) {
            taxa = valor.multiply(BigDecimal.valueOf(0.082));
        } else if (dias <= 30) {
            taxa = valor.multiply(BigDecimal.valueOf(0.069));
        } else if (dias <= 40) {
            taxa = valor.multiply(BigDecimal.valueOf(0.047));
        } else if (dias <= 50) {
            taxa = valor.multiply(BigDecimal.valueOf(0.017));
        } else {
            throw new IllegalArgumentException("Erro: Não há taxa aplicável, a transferência não pode ser realizada.");
        }

        return taxa;
    }
}
