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

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
<<<<<<< HEAD
=======
import lombok.Data;
>>>>>>> 2f2ff1ef94e845f45563caae9f35f5a2eb2476cc
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Table
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "COMMENT_ID")
	private Integer id;
	
	@Column(name = "COMMENT_CONTENT")
	private String content;

	@Column(name = "COMMENT_PARENT_ID")
	private Integer parentId;
	
	@ManyToOne
	@JoinColumn
	@JsonBackReference(value = "user-comment")
	private User user;
	
	@ManyToOne
	@JoinColumn
	@JsonBackReference(value = "article-comment")
	private Article article;
	
<<<<<<< HEAD
	@Column(name = "COMMENT_WRITER")
	private String writer;
	
=======
>>>>>>> 2f2ff1ef94e845f45563caae9f35f5a2eb2476cc
	public void setUser(User user) {
		this.user = user;
		user.getComments().add(this);
	}

	public void setArticle(Article article) {
		this.article = article;
		article.getComments().add(this);
	}
	
	@Builder 
	@Getter @Setter
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Request{
		
		private Integer id;
		private String content;
		private User user;
		private Article article;
		private Integer parentId;
		
		public static Comment toEntity(Comment.Request req) {
			return Comment.builder()
					.id(req.getId())
					.user(req.getUser())
					.article(req.getArticle())
					.content(req.getContent())
					.parentId(req.getParentId())
					.build();
		}
		
		
	}
	
	@Builder
	@Getter @Setter
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Response{
		
		private Integer id;
		private String content;
		private Integer parentId;
		
		public static Comment.Response toResponse(Comment commentEntity){
			return Comment.Response.builder()
					.id(commentEntity.getId())
					.content(commentEntity.getContent())
					.parentId(commentEntity.getParentId())
					.build();
		}
		
		public static List<Comment.Response> toResponseList(List<Comment> comments){
			List<Comment.Response> commentList = new ArrayList<Comment.Response>();
			for (Comment comment : comments) {
				commentList.add(Comment.Response.toResponse(comment));
			}
			return commentList;
			
		}
		
	}
	
	

<<<<<<< HEAD
}
=======
}
>>>>>>> 2f2ff1ef94e845f45563caae9f35f5a2eb2476cc
