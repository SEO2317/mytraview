package com.mamoorie.mytraview.entity;

import java.util.ArrayList;
import java.util.List;

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



import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "place")
public class Place {
	
	private Integer id;
	
	private Integer areaCode;
	
	private Integer cityCode;
	
	private Double mapX;
	
	private Double mapY;
	
	private String name;
	
	private String category;
	
	private Double rating;
	
	private Article article;
	
	private String uploadDate;
	
	
	@Getter @Setter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Request{
		
		private Integer id;
		
		private Integer areaCode;
		
		private Integer cityCode;
		
		private Double mapX;
		
		private Double mapY;
		
		private String name;
		
		private String category;
		
		private Double rating;
		
		private Article article;
		
		private String uploadDate;
		
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
					.uploadDate(req.getUploadDate())
					.build();
		}
		
		
	}
	@Getter @Setter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Response{
		
		private Integer id;
		
		private Integer areaCode;
		
		private Integer cityCode;
		
		private Double mapX;
		
		private Double mapY;
		
		private String name;
		
		private String category;
		
		private Double rating;
		
		private Article article;
		
		private String uploadDate;
		
		public static Place.Response toResponse(Place place){
			
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
					.uploadDate(place.getUploadDate())
					.build();
					
		}
		
		public static List<Place.Response> toResponseList(List<Place> places){
			List<Place.Response> placeList = new ArrayList<Place.Response>();
			
			for (Place place: places) {
				placeList.add(Place.Response.toResponse(place));
			}
			
			return placeList;
		}
		
	}
}
