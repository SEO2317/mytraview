//package com.mamoorie.mytraview.entity;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.OneToMany;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Builder
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//public class Bookmark {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Integer id;
//
//	@Column(name = "BOOKNAME")
//	private String name;
//
//	@OneToMany(mappedBy = "bookmark")
//	private List<Article> articles;
//
//	@ManyToOne
//	@JoinColumn(name = "USER_EMAIL")
//	private User user;
//
//	@Builder
//	@Getter
//	@Setter
//	@NoArgsConstructor
//	@AllArgsConstructor
//	public static class Request {
//
//		private Integer id;
//		private String name;
//		private List<Article> articles;
//		private User user;
//
//		public static Bookmark toEntity(Bookmark.Request req) {
//			return Bookmark.builder()
//					.id(req.getId())
//					.name(req.getName())
//					.articles(req.getArticles())
//					.build();
//		}
//	}
//
//	@Builder
//	@Getter
//	@Setter
//	@NoArgsConstructor
//	@AllArgsConstructor
//	public static class Response {
//
//		private Integer id;
//		private String name;
//		private List<Article> articles;
//
//		public static Bookmark.Response toResponse(Bookmark bookmarkEntity) {
//			return Bookmark.Response.builder()
//					.id(bookmarkEntity.getId())
//					.name(bookmarkEntity.getName())
//					.articles(bookmarkEntity.getArticles())
//					.build();
//		}
//
//		public static List<Bookmark.Response> toResponseList(List<Bookmark> bookmarks) {
//			List<Bookmark.Response> bookmarkList = new ArrayList<Bookmark.Response>();
//			for (Bookmark bookmark : bookmarks) {
//				bookmarkList.add(Bookmark.Response.toResponse(bookmark));
//			}
//			return bookmarkList;
//		}
//	}
//
//}