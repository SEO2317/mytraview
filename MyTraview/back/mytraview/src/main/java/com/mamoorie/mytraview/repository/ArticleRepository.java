package com.mamoorie.mytraview.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mamoorie.mytraview.entity.Article;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Integer> {

	// 쿼리 메서드
	// https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods
	
//	// locationId 으로 조회
//	List<Fruit> findByLocationsLocationId(int locationId);
//	List<Fruit> findDistinctByLocationsLocalEngName(String localEngName);
//	Fruit findDistinctByItemNameAndLocationsLocalEngName(String itemName, String localEngName);
//	// harvestDate 으로 조회
//	List<Fruit> findByHarvestStartBeforeAndHarvestEndAfter(Date curDate1, Date curDate2);
	
	List<Article> findByPlacesCategory(String category);
	
}