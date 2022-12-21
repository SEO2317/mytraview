package com.mamoorie.mytraview.entity;

import java.util.ArrayList;
import java.util.List;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.sun.istack.NotNull;

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
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private String areaCode;
	
	@Column
	private Integer cityCode;
	
	@Column
	private Double mapX;
	
	@Column
	private Double mapY;
	
	@Column(name = "place_name")
	private String placeName;
	
	@Column(name = "place_category")
	private String category;
	
	@Column
	private Double rating;
	
//	@Column
//	private Article article;
	
	@Column
	private String uploadDate;
	
	@Getter @Setter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Request{
		
//		private Integer id;
		
		@NotBlank
		@NotNull
		private String areaCode;
		
//		@NotBlank
//		@NotNull
		private Integer cityCode;
		
		@NotBlank
		@NotNull
		private Double mapX;
		
		@NotBlank
		@NotNull
		private Double mapY;
		
		@NotBlank
		@NotNull
		private String placeName;
		
		@NotBlank
		@NotNull
		private String category;
		
		private Double rating;
		
//		private Article article;
		
		private String uploadDate;
		
		public static Place toEntity(Place.Request req) {
			return Place.builder()
//					.id(req.getId())
					.areaCode(req.getAreaCode())
					.cityCode(req.getCityCode())
					.mapX(req.getMapX())
					.mapY(req.getMapY())
					.placeName(req.getPlaceName())
					.category(req.getCategory())
					.rating(req.getRating())
//					.article(req.getArticle())
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
		
		private String areaCode;
		
		private Integer cityCode;
		
		private Double mapX;
		
		private Double mapY;
		
		private String placeName;
		
		private String category;
		
		private Double rating;
		
//		private Article article;
		
		private String uploadDate;
		
		public static Place.Response toResponse(Place place){
			
			return Place.Response.builder()
					.id(place.getId())
					.areaCode(place.getAreaCode())
					.cityCode(place.getCityCode())
					.mapX(place.getMapX())
					.mapY(place.getMapY())
					.placeName(place.getPlaceName())
					.category(place.getCategory())
					.rating(place.getRating())
//					.article(place.getArticle())
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
