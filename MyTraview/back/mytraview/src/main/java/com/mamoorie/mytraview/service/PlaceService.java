package com.mamoorie.mytraview.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mamoorie.mytraview.entity.Place;
import com.mamoorie.mytraview.repository.PlaceRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class PlaceService {
	
	private final PlaceRepository placeRepository;
	
	public void savePlace(Place place) {
		placeRepository.save(place);
	}
	
	public List<Place> viewAllMarkers(){
		List<Place> markersLocationData = placeRepository.findAll();
		return markersLocationData;
	}
	
	
	
	
}
