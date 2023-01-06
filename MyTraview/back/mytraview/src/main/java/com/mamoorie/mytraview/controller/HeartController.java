package com.mamoorie.mytraview.controller;

import javax.transaction.Transactional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mamoorie.mytraview.entity.Heart;
import com.mamoorie.mytraview.service.HeartService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("heart")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3100")
public class HeartController {
	
	private final HeartService heartService;
	
	@PostMapping
	public ResponseEntity<?> onHeart(@RequestBody Heart.Request req) {
			
		return ResponseEntity.ok().body(heartService.onHeart(req));
	}
	
	@Transactional
	@DeleteMapping
	public ResponseEntity<?> unHeart(@RequestBody Heart.Request req) {
		
		
		return ResponseEntity.ok().body(heartService.offHeart(req));
	}
	
	//테스트 용
	@GetMapping("/viewAll")
	public ResponseEntity<?> viewAllHeart(){
		
		return ResponseEntity.ok().body(heartService.viewAll());
	}
	
	//한 유저가 좋아요 누른 글 확인
	@GetMapping("/email={email}")
	public ResponseEntity<?> likedArticles(@PathVariable String email){
		
		return ResponseEntity.ok().body(heartService.viewUserHeart(email));
	}
	
}
