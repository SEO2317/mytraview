package com.mamoorie.mytraview.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mamoorie.mytraview.entity.Place;
import com.mamoorie.mytraview.service.PlaceService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("place")
@RequiredArgsConstructor
@Slf4j
public class PlaceController {
	
	private final PlaceService placeService;
	
	//장소 등록
	@PostMapping("/registration")
	public ResponseEntity<?> registrationPlace(@RequestBody Place.Request req){
		
		if(req == null) {
			return ResponseEntity.badRequest().body("잘못된 요청입니다.");
		}
		
		Place placeEntity = Place.Request.toEntity(req);
		placeService.savePlace(placeEntity);
		Place.Response res = Place.Response.toResponse(placeEntity);
		
		return ResponseEntity.ok().body(res);
	}
	
	
	// 로컬호스트/retrieve?placeName = 값 으로 조회
	// 저장된 장소 중 장소명으로 조회
	@GetMapping("/retrieve1")
	public ResponseEntity<?> retrieveByPlaceName(@RequestParam("placeName") String placeName){
		if(placeName == null) {
			return ResponseEntity.badRequest().body("잘못된 요청입니다.");
		}
		List<Place> selectedPlace = placeService.viewByPlaceName(placeName);
		
		return ResponseEntity.ok().body(selectedPlace);
	}
	
	// 저장된 장소 중 지역코드로 조회
	@GetMapping("/retrieve2")
	public ResponseEntity<?> retrieveByAreaCode(@RequestParam("areaCode") String areaCode){
		if(areaCode == null) {
			return ResponseEntity.badRequest().body("잘못된 요청입니다.");
		}
		List<Place> selectedPlace = placeService.viewAllByAreaCode(areaCode);
		
		return ResponseEntity.ok().body(selectedPlace);
	}
	
	// 저장된 장소 중 위도, 경도로 조회
	@GetMapping("/retrieve3")
	public ResponseEntity<?> retrieveByLatLng(@RequestParam("lat") Double lat, @RequestParam("lng") Double lng){
		if(lat == null && lng == null) {
			return ResponseEntity.badRequest().body("잘못된 요청입니다.");
		}
	
		List<Place> selectedPlace = placeService.viewAllByLatLng(lat, lng);
		return ResponseEntity.ok().body(selectedPlace);
	}
	
	
	
	// 저장된 장소 중 카테고리로 조회
	@GetMapping("/retrieve4")
	public ResponseEntity<?> retrieveByCategory(@RequestParam("category") String category){
		if(category == null) {
			return ResponseEntity.badRequest().body("잘못된 요청입니다.");
		}
		List<Place> selectedPlace = placeService.viewAllByCategory(category);
		List<Place.Response> Places = Place.Response.toResponseList(selectedPlace);
		return ResponseEntity.ok().body(Places);
	}
	
	
	//장소 수정
	@PutMapping("/modify")
	public ResponseEntity<?> modifyPlace(Place.Request req){
		if(req == null) {
			return ResponseEntity.badRequest().body("잘못된 요청입니다.");
		}
		Place placeEntity = Place.Request.toEntity(req);
		Place updatedPlaceInfo = placeService.updatePlaceInfo(placeEntity);
		return ResponseEntity.ok().body(updatedPlaceInfo);
	}
	
	//장소 삭제
	@DeleteMapping("/remove")
	public void removePlace(Place.Request req) {
		if(req == null) {
			log.warn("에러 발생");
		}
		Place placeEntity = Place.Request.toEntity(req);
		placeService.deletePlaceInfo(placeEntity);
	}
	
	
	
}