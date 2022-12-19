package com.mamoorie.mytraview.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mamoorie.mytraview.entity.Place;


@Repository
public interface PlaceRepository extends JpaRepository<Place, Integer> {
	
	
	
}
