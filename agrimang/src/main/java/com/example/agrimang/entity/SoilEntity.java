package com.example.agrimang.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "soil")
public class SoilEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String suitablePlants;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSuitablePlants() {
        return suitablePlants;
    }

    public void setSuitablePlants(String suitablePlants) {
        this.suitablePlants = suitablePlants;
    }
}
