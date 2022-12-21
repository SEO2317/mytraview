package com.mamoorie.mytraview.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data // Getter, Setter, ToString ���Ե� 
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table
public class Liked {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "LIKED_ID")
	private Integer id;
	
	@Column(name = "LIKED_ARTICLE_ID")
	private Integer articleId;
	
	@ManyToOne
	@JoinColumn
	private User user;

	public void setUser(User user) {
		this.user = user;
		user.getLikeds().add(this);
	}
	
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Request {
		
		private Integer id;
		private Integer articleId;
		private User user;
		
		public static Liked toEntity(Liked.Request req) {
			return Liked.builder()
					.id(req.getId())
					.articleId(req.getArticleId())
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
		
		public static Liked.Response toResponse(Liked liked) {
			return Liked.Response.builder()
					.id(liked.getId())
					.articleId(liked.getArticleId())
					.build();
		}
		
		public static List<Liked.Response> toResponseList(List<Liked> likeds) {
			List<Liked.Response> likedList = new ArrayList<Liked.Response>();
			for (Liked liked : likeds) {
				likedList.add(Liked.Response.toResponse(liked));
			}
			return likedList;
		}
		
	}
}
