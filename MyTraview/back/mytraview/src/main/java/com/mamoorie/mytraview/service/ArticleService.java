package com.mamoorie.mytraview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mamoorie.mytraview.entity.Article;
import com.mamoorie.mytraview.repository.ArticleRepository;

@Service
public class ArticleService {
	
	@Autowired
	private ArticleRepository articleRepository;
	
	public List<Article> findAllArticles() {
		return articleRepository.findAll();
	}

	public List<Article> findByCategory(String category) {
		return articleRepository.findByPlacesCategory(category);
	}

	public Article createArticle(Article newArticle) {
		return articleRepository.save(newArticle);
	}
	
	
}


