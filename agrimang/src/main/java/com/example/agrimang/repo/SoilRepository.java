package com.example.agrimang.repo;

import com.example.agrimang.entity.SoilEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SoilRepository extends JpaRepository<SoilEntity, Long> {
}
