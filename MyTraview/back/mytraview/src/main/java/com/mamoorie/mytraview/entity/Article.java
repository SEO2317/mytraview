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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
//@DynamicUpdate
public class Article {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ARTICLE_ID")
	private Integer id;

	//@Column(name = "ARTICLE_TITLE", nullable = false)
	@Column(name = "ARTICLE_TITLE")
	private String title;
	
	@Column(name = "ARTICLE_CONTENT")
	private String content;

	@Column(name = "ARTICLE_UPLOAD_DATE")
	private String uploadDate;

	@Column(name = "ARTICLE_VIEW_COUNT")
	@ColumnDefault("0")
	private Integer viewCount;

	@Column(name = "ARTICLE_LIKED_COUNT")
	@ColumnDefault("0")
	private Integer likedCount;

	@OneToMany(mappedBy = "article")
	private List<Comment> comments;

	@OneToMany(mappedBy = "article")
	private List<Place> places;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn
	private User user;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn
	private Bookmark bookmark;

	public void setUser(User user) {
		this.user = user;
		user.getArticles().add(this);
	}
	
	public void setBookmark(Bookmark bookmark) {
		this.bookmark = bookmark;
		bookmark.getArticles().add(this);
	}
	
	// 요청 받을 때 사용할 User Entity의 DTO
	@Setter
	@Getter
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Request {

		private Integer id;
		private String title;
		private String content;
		private String uploadDate;
		private Integer viewCount;
		private Integer likedCount;
		private List<Comment> comments;
		private List<Place> places;
		private User user;
		private Bookmark bookmark;
		
		public static Article toEntity(final Article.Request request) {
			return Article.builder()
					.id(request.getId())
					.title(request.getTitle())
					.content(request.getContent())
					.uploadDate(request.getUploadDate())
					.viewCount(request.getViewCount())
					.likedCount(request.getLikedCount())
					.comments(request.getComments())
					.places(request.getPlaces())
					.user(request.getUser())
					.bookmark(request.getBookmark())
					.build();
		}
		
	}

	// ������ ������ �� ����� User Entity�� DTO
	@Setter
	@Getter
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Response {

		private Integer id;
		private String title;
		private String content;
		private String uploadDate;
		private Integer viewCount;
		private Integer likedCount;
		
		private List<Comment> comments;
		private List<Place> places;

		public static Article.Response toResponse(final Article article) {
			return Article.Response.builder()
					.id(article.getId())
					.title(article.getTitle())
					.content(article.getContent())
					.uploadDate(article.getUploadDate())
					.viewCount(article.getViewCount())
					.likedCount(article.getLikedCount())
					.comments(article.getComments())
					.places(article.getPlaces())
					.build();
		}

		public static List<Article.Response> toResponseList(final List<Article> articles) {
			List<Article.Response> resList = new ArrayList<>();
			for (Article article : articles) {
				resList.add(Article.Response.toResponse(article));
			}
			return resList;
		}
		
	}
	
}
