package com.mamoorie.mytraview.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mamoorie.mytraview.entity.Article;
import com.mamoorie.mytraview.service.ArticleService;

@RestController
@RequestMapping("article")
//@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001", "http://127.0.0.1:5500"})
@CrossOrigin(origins = {"http://localhost:3100"})
public class ArticleController {

	@Autowired
	private ArticleService articleService;
	
	// 'GET' http://localhost:8100/article
	@GetMapping
	public List<Article.Response> findAllArticles() {
		System.out.println("GET: findAllArticles() of ArticleController called");		
		List<Article> articleList = articleService.findAllArticles();
		return Article.Response.toResponseList(articleList);
	}
	
	// 'GET' http://localhost:8100/article/list/:category
	@GetMapping("/list/{category}")
	public List<Article.Response> findArticlesByCategory(@PathVariable String category) {
		System.out.println("GET: findArticlesByCategory() of ArticleController called");		
		List<Article> articleList = articleService.findByCategory(category);
		return Article.Response.toResponseList(articleList);
	}
	
	// 'POST' http://localhost:8100/article
	@PostMapping
	public ResponseEntity<Article.Response> createArticle(@RequestBody @Valid Article.Request request) {
		System.out.println("POST: createArticle() of ArticleController called");		
		Article newArticle = Article.Request.toEntity(request);
		//Address address = request.getAddress();
		Article savedArticle = articleService.createArticle(newArticle);
		//address.setUser(savedUser);
		//addressRepository.save(address);
		Article.Response response = Article.Response.toResponse(savedArticle);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}

}