package com.example.agrimang.service;

import com.example.agrimang.entity.SoilEntity;
import com.example.agrimang.repo.SoilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SoilService {

    @Autowired
    private SoilRepository soilRepository;

    public SoilEntity saveSoil(SoilEntity soil) {
        return soilRepository.save(soil);
    }

    public List<SoilEntity> getAllSoils() {
        return soilRepository.findAll();
    }

    public SoilEntity updateSoil(Long id, SoilEntity soil) {
        Optional<SoilEntity> existingSoil = soilRepository.findById(id);
        if (existingSoil.isPresent()) {
            SoilEntity updatedSoil = existingSoil.get();
            updatedSoil.setType(soil.getType());
            updatedSoil.setDescription(soil.getDescription());
            updatedSoil.setSuitablePlants(soil.getSuitablePlants());
            return soilRepository.save(updatedSoil);
        }
        return null; // Or throw an exception if the soil with the given ID is not found
    }

    public void deleteSoil(Long id) {
        soilRepository.deleteById(id);
    }
}
