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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Table
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private String content;
	
	@ManyToOne
	@JoinColumn
	private User user;
	
	@ManyToOne
	@JoinColumn
	private Article article;
	
	@Column
	private Integer parentId;
	
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
			return Comment.builder().id(req.getId()).content(req.getContent())
					.parentId(req.getParentId()).build();
		}
		
		
	}
	
	@Builder
	@Getter @Setter
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Response{
		
		private Integer id;
		private String content;
		private Article article;
		private Integer parentId;
		
		public static Comment.Response toResponse(Comment commentEntity){
			return Comment.Response.builder().id(commentEntity.getId())
					.content(commentEntity.getContent())
					.article(commentEntity.getArticle())
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
	
	

}
