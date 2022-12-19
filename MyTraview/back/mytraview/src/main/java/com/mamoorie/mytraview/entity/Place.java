package com.mamoorie.mytraview.entity;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data // Getter, Setter, ToString 포함됨
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Place {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PLACE_ID")
	private Integer id;
	
	@Column(name = "AREA_CODE")
	private Integer areaCode;
	
	@Column(name = "CITY_CODE")
	private Integer cityCode;
	
	@Column(name = "MAP_X")
	private Double mapX;
	
	@Column(name = "MAP_Y")
	private Double mapY;
	
	@Column(name = "PLACE_NAME")
	private String name;
	
	@Column(name = "TAG_CATEGORY")
	private String category;
	
	@Column(name = "PLACE_RATE")
	private Double rating;
	
	@ManyToOne
	@JoinColumn(name = "ARTICLE_ID") // 2번 같은 이름 가능?? 가능할 것 같긴 한데
	private Article article;
	
	private Timestamp uploadDate;
	
	
	// 요청 받을 때 사용할 Place Entity의 DTO
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Request {
		
		private Integer id;
		private Integer areaCode;
		private Integer cityCode;
		private Double mapX;
		private Double mapY;
		private String name;
		
		private String category;
		
		private Double rating;
		
		private Article article;
		
		public static Place toEntity(Place.Request req) {
			return Place.builder()
					.id(req.getId())
					.areaCode(req.getAreaCode())
					.cityCode(req.getCityCode())
					.mapX(req.getMapX())
					.mapY(req.getMapY())
					.name(req.getName())
					.category(req.getCategory())
					.rating(req.getRating())
					.article(req.getArticle())
					.build();
		}
	}
	
	// 서버가 응답할 때 사용할 Place Entity의 DTO
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Response {
		
		private Integer id;
		private Integer areaCode;
		private Integer cityCode;
		private Double mapX;
		private Double mapY;
		private String name;
		
		private String category;
		
		private Double rating;
		
		private Article article;
		
		public static Place.Response toResponse(Place place) {
			return Place.Response.builder()
					.id(place.getId())
					.areaCode(place.getAreaCode())
					.cityCode(place.getCityCode())
					.mapX(place.getMapX())
					.mapY(place.getMapY())
					.name(place.getName())
					.category(place.getCategory())
					.rating(place.getRating())
					.article(place.getArticle())
					.build();
		}
		
		public static List<Place.Response> toResponseList(List<Place> places) {
			List<Place.Response> placeList = new ArrayList<Place.Response>();
			for (Place place : places) {
				placeList.add(Place.Response.toResponse(place));
			}
			return placeList;
		}
		
	}

}
