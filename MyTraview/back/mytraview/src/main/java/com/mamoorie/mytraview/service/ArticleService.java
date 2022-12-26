package com.mamoorie.mytraview.service;

import com.mamoorie.mytraview.entity.Article;
import com.mamoorie.mytraview.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
//@RequiredArgsConstructor
public class ArticleService {

	private final ArticleRepository articleRepository;

	public ArticleService(ArticleRepository articleRepository) {
		this.articleRepository = articleRepository;
	}

	public List<Article> findAllArticles() {
		return articleRepository.findAll();
	}

	public List<Article> findByCategory(String category) {
		return articleRepository.findByPlacesCategory(category);
	}

	public List<Article> findByPlacesAreaCodeAndPlacesCategory(String areaCode, String category) {
		return articleRepository.findByPlacesAreaCodeAndPlacesCategory(areaCode, category);
	}
	
	public List<Article> findByPlacesMapXAndPlacesMapYAndPlacesPlaceName(Double mapX, Double mapY, String placeName) {
		return articleRepository.findByPlacesMapXAndPlacesMapYAndPlacesPlaceName(mapX, mapY, placeName);
	}

	public Article createArticle(Article newArticle) {
		return articleRepository.save(newArticle);
	}
	
	
}


