package com.example.agrimang.controller;

import com.example.agrimang.entity.SoilEntity;
import com.example.agrimang.service.SoilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class SoilController {

    @Autowired
    private SoilService soilService;

    @PostMapping("/soil")
    public SoilEntity createSoil(@RequestBody SoilEntity soil) {
        return soilService.saveSoil(soil);
    }

    @GetMapping("/soils")
    public List<SoilEntity> getAllSoils() {
        return soilService.getAllSoils();
    }
    
    @PutMapping("/soil/{id}")
    public SoilEntity updateSoil(@PathVariable Long id, @RequestBody SoilEntity soil) {
        return soilService.updateSoil(id, soil);
    }

    @DeleteMapping("/soil/{id}")
    public void deleteSoil(@PathVariable Long id) {
        soilService.deleteSoil(id);
    }
}
