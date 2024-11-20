package com.agendamento.transferencia.configuration;

import com.agendamento.transferencia.model.Usuario;
import com.agendamento.transferencia.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class CargaInicial {

    @Bean
    public CommandLineRunner commandLineRunner(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (usuarioRepository.findByNomeUsuario("admin").isEmpty()) {
                Usuario usuario = new Usuario();
                usuario.setNomeUsuario("admin");
                usuario.setSenha(passwordEncoder.encode("admin123"));
                usuario.setPapel("ADMIN");
                usuarioRepository.save(usuario);
            }
        };
    }
}