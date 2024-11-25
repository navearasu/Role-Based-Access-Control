package com.example.agrimang.service;

import com.example.agrimang.entity.Scheme;
import com.example.agrimang.repo.Schemerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Schemeservice {

    @Autowired
    private Schemerepo schemeRepository;

    public Scheme addScheme(Scheme scheme) {
        return schemeRepository.save(scheme);
    }

    public Scheme updateScheme(Long id, Scheme schemeDetails) {
        Optional<Scheme> schemeOptional = schemeRepository.findById(id);
        if (schemeOptional.isPresent()) {
            Scheme scheme = schemeOptional.get();
            scheme.setTitle(schemeDetails.getTitle());
            scheme.setDescription(schemeDetails.getDescription());
            scheme.setDetails(schemeDetails.getDetails());
            return schemeRepository.save(scheme);
        } else {
            throw new RuntimeException("Scheme not found with id " + id);
        }
    }

    public void deleteScheme(Long id) {
        schemeRepository.deleteById(id);
    }

    public List<Scheme> getAllSchemes() {
        return schemeRepository.findAll();
    }

    public Scheme getSchemeById(Long id) {
        return schemeRepository.findById(id).orElse(null);
    }
}
