package com.mamoorie.mytraview.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mamoorie.mytraview.entity.Heart;
import com.mamoorie.mytraview.entity.User;
import com.mamoorie.mytraview.repository.HeartRespository;
import com.mamoorie.mytraview.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class HeartService {
	
	private final HeartRespository heartRespository;
	
	private final UserRepository userRepository;
	
	//좋아요 On
	public Heart onHeart(Heart.Request req) {
		
		Heart oneHeart = Heart.Request.toEntity(req);
		
		User findUser = userRepository.findByEmail(oneHeart.getEmail());
		
		oneHeart.setUser(findUser);
		
		heartRespository.save(oneHeart);
			
		return oneHeart;
	}
	
	//좋아요 Off
	public List<?> offHeart(Heart.Request req) {
		
		Heart oneHeart = Heart.Request.toEntity(req);
		
		heartRespository.deleteByArticleIdAndEmail(oneHeart.getArticleId(), oneHeart.getEmail());;
		
		return heartRespository.findAll();
	}
	
	//유저가 좋아요 누른 글들 확인
	public List<Heart> viewUserHeart(String email){
		
		return heartRespository.findAllByEmail(email);
	}
	
	//한 게시글의 좋아요(좋아요 누른 수 확인용)
	public List<Heart> viewAllbyArticleId(Integer articleId){
		
		return heartRespository.findAllByArticleId(articleId);
	}
	
	//테스트용(등록된 모든 좋아요 확인)
	public List<Heart> viewAll(){
		return heartRespository.findAll();
	}

}
