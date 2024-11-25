package com.example.agrimang.controller;

import com.example.agrimang.entity.Scheme;
import com.example.agrimang.service.Schemeservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/schemes")
@CrossOrigin
public class Schemecontroller {

    @Autowired
    private Schemeservice schemeService;

    @PostMapping("/add")
    public ResponseEntity<Scheme> addScheme(@RequestBody Scheme scheme) {
        Scheme newScheme = schemeService.addScheme(scheme);
        return ResponseEntity.ok(newScheme);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Scheme> updateScheme(@PathVariable Long id, @RequestBody Scheme schemeDetails) {
        Scheme updatedScheme = schemeService.updateScheme(id, schemeDetails);
        return ResponseEntity.ok(updatedScheme);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteScheme(@PathVariable Long id) {
        schemeService.deleteScheme(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/all")
    public ResponseEntity<List<Scheme>> getAllSchemes() {
        List<Scheme> schemes = schemeService.getAllSchemes();
        return ResponseEntity.ok(schemes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Scheme> getSchemeById(@PathVariable Long id) {
        Scheme scheme = schemeService.getSchemeById(id);
        return ResponseEntity.ok(scheme);
    }
}
