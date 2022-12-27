package com.mamoorie.mytraview.service;

import java.util.List;
import java.util.Optional;

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
	
	
	// Create place data
	public void savePlace(Place place) {
//		if(
//		placeRepository.existsByMapXAndMapYAndName(place.getMapX(), place.getMapY(), place.getPlace_name())) {
//			log.warn("해당 장소 및 업체의 리뷰가 이미 존재합니다.");
//		}
		placeRepository.save(place);
	}
	
	// 마커 및 위치 정보를 표시하기 위한 전체 데이터 조회 = R
	public List<Place> viewAllPlaces(){
		List<Place> findByAllPlaceData = placeRepository.findAll();
		return findByAllPlaceData;
	}
	
	// 마커 및 위치 정보를 클라이언트가 선택한 조건(장소명)으로 데이터 조회 = R 
	public List<Place> viewByPlaceName(String placeName){
		
		List<Place> chosenPlace = placeRepository.findAllByPlaceName(placeName);
		return chosenPlace;
	}
	
	// 지역코드로 해당 지역 정보 모두를 가져옴
	public List<Place> viewAllByAreaCode(String areaCode){
		
		return placeRepository.findAllByAreaCode(areaCode);
	}
	
	
	// 위도, 경도로 해당 장소 모든 데이터를 가져옴
	public List<Place> viewAllByLatLng(Double mapX, Double mapY){
		
		return placeRepository.findAllByMapXAndMapY(mapX, mapY);
	}
	
	// 카테고리로 장소의 데이터를 가져옴.
	public List<Place> viewAllByCategory(String category){
		return placeRepository.findAllByCategory(category);
	}
	
	// 장소 데이터 수정
	public Place updatePlaceInfo(Place placeEntity) {
		Optional<Place> selectedPlace = placeRepository.findById(placeEntity.getId());
		selectedPlace.ifPresent(place->{
			place.setCategory(placeEntity.getCategory());
			place.setMapX(placeEntity.getMapX());
			place.setMapY(placeEntity.getMapY());
			place.setPlaceName(placeEntity.getPlaceName());
			place.setRating(placeEntity.getRating());
			placeRepository.save(place);
		  }
		);
		Optional<Place> place = placeRepository.findById(placeEntity.getId());
		Place updatedPlace = place.get();  
		return updatedPlace;
	}
	
	// 장소 데이터 삭제
	public void deletePlaceInfo(Place placeEntity) {
		placeRepository.deleteById(placeEntity.getId());
	}
	
<<<<<<< HEAD
}
=======
}
>>>>>>> 2f2ff1ef94e845f45563caae9f35f5a2eb2476cc
