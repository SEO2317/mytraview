package com.mamoorie.mytraview.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mamoorie.mytraview.entity.Article;
import com.mamoorie.mytraview.entity.User;
import com.mamoorie.mytraview.repository.UserRepository;
import com.mamoorie.mytraview.service.ArticleService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("article")
//@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001", "http://127.0.0.1:5500"})
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3100"})
public class ArticleController {
	
	
//	private ArticleRepository articleRepository;
	
	
	private final UserRepository userRepository;
	
	
	private final ArticleService articleService;
	
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
	
	// 'GET' http://localhost:8100/article/list/:areaCode/:category
	@GetMapping("/list/{areaCode}/{category}")
	public List<Article.Response> findByPlacesAreaCodeAndPlacesCategory(@PathVariable String areaCode, @PathVariable String category) {
		System.out.println("GET: findByPlacesAreaCodeAndPlacesCategory() of ArticleController called");		
		List<Article> articleList = articleService.findByPlacesAreaCodeAndPlacesCategory(areaCode, category);
		return Article.Response.toResponseList(articleList);
	}
	
	// 'GET' http://localhost:8100/article/list/:mapX/:mapY/:placeName
	@GetMapping("/list/{mapX}/{mapY}/{placeName}")
	public List<Article.Response> findByPlacesMapXAndPlacesMapYAndPlacesPlaceName(@PathVariable Double mapX, @PathVariable Double mapY, @PathVariable String placeName) {
		System.out.println("GET: findByPlacesMapXAndPlacesMapYAndPlacesPlaceName() of ArticleController called");		
		List<Article> articleList = articleService.findByPlacesMapXAndPlacesMapYAndPlacesPlaceName(mapX, mapY, placeName);
		return Article.Response.toResponseList(articleList);
	} 
	
	// 'POST' http://localhost:8100/article
	@PostMapping
	public ResponseEntity<Article.Response> createArticle(@RequestBody @Valid Article.Request request) {
		System.out.println("POST: createArticle() of ArticleController called");		
		Article newArticle = Article.Request.toEntity(request);
//		Address address = request.get();
		User foundUser = userRepository.findByEmail("1234@1234.com");
		newArticle.setUser(foundUser);
		//TODO: Bookmark set ^ 위에 방법
		Article savedArticle = articleService.createArticle(newArticle);
		Article.Response response = Article.Response.toResponse(savedArticle);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}
	
	@PutMapping
	public ResponseEntity<?> modifyArticle(@RequestBody Article.Request req){
		System.out.println("PUT: modifyArticle() of ArticleController called");
		
		Article articleEntity = Article.Request.toEntity(req);
		
		Article updatedArticle = articleService.update(articleEntity);
		
		Article.Response res = Article.Response.toResponse(updatedArticle);
		
		return ResponseEntity.ok().body(res);
	}
	
	@DeleteMapping("/articleId={articleId}")
	public ResponseEntity<?> removeArticle(@PathVariable Integer articleId){
		
		articleService.delete(articleId);
		
		Article.Response res = Article.Response.builder().resMessage("삭제 작업이 완료됐습니다..").build();
		
		return ResponseEntity.ok().body(res);
	}

}