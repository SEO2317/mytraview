package com.mamoorie.mytraview.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "HEART")
public class Heart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "HEART_ID")
	private Integer id;
	
	@Column(name = "HEART_ARTICLE_ID")
	private Integer articleId;
	
	@Column(name = "HEART_EMAIL")
	private String email;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn
	@JsonBackReference(value = "user-heart")
	private User user;

	public void setUser(User user) {
		this.user = user;
		user.getHearts().add(this);
	}
	
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Request {
		
		private Integer id;
		private Integer articleId;
		private String email;
		private User user;
		
		public static Heart toEntity(Heart.Request req) {
			return Heart.builder()
					.id(req.getId())
					.articleId(req.getArticleId())
					.email(req.getEmail())
					.user(req.getUser())
					.build();
		}
	}
	
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Response {
		
		private Integer id;
		private Integer articleId;
		private String email;
		
		public static Heart.Response toResponse(Heart heart) {
			return Heart.Response.builder()
					.id(heart.getId())
					.articleId(heart.getArticleId())
					.email(heart.getEmail())
					.build();
		}
		
		public static List<Heart.Response> toResponseList(List<Heart> hearts) {
			List<Heart.Response> heartList = new ArrayList<Heart.Response>();
			for (Heart heart : hearts) {
				heartList.add(Heart.Response.toResponse(heart));
			}
			return heartList;
		}
		
	}

}
