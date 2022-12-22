package com.mamoorie.mytraview.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "USER_INFO")
public class User {

    @Id
    @Column(name = "USER_EMAIL", length = 100)
    @Email
    private String email;

    @Column(name = "USER_PASSWORD", length = 100, nullable = false)
    private String pw;

    @Column(name = "USER_TOKEN")
    private String token;

    @Column(name = "USER_NAME")
    private String name;

    @Column(name = "USER_PHONE")
    private String phone;

    @Column(name = "USER_PROFILE_IMG")
    private String profileImg;

    @Enumerated(EnumType.STRING)
    private Role role;
    
    @OneToMany(mappedBy = "user")
	@JsonManagedReference
    private List<Article> articles;

    @OneToMany(mappedBy = "user")
	@JsonManagedReference
    private List<Comment> comments;

    @OneToMany(mappedBy = "user")
	@JsonManagedReference
    private List<Bookmark> bookmarks;
    
    @OneToMany(mappedBy = "user")
	@JsonManagedReference 
    private List<Liked> likeds;

//    private List<Article> likedArticles;

    @Setter
    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    public static class Request {
    	
    	private String email;
        private String pw;
        private String token;
        private String name;
        private String phone;
        private String profileImg;
        private Role role;
        private List<Article> articles;
        private List<Comment> comments;
        private List<Bookmark> bookmarks;
        private List<Liked> likeds;

	    public static User toEntity(final Request request) {
	        return User.builder()
	        		.email(request.getEmail())
	        		.pw(request.getPw())
	                .articles(request.getArticles())
	                .comments(request.getComments())
	                .phone(request.getPhone())
	                .name(request.getName())
	                .role(request.getRole())
	                .profileImg(request.getProfileImg())
	                .likeds(request.getLikeds())
	                .bookmarks(request.getBookmarks())
	                //TODO: 토큰 처리
	                .token(request.getToken())
	                .build();
	    }

    }
    
    @Setter
    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    public static class Response {
    	
    	private String email;
        private String token;
        private String name;
        private String phone;
        private String profileImg;
        private Role role;
        private List<Article> articles;
        private List<Comment> comments;
        private List<Bookmark> bookmarks;
        private List<Liked> likeds;
        
	    public static User.Response toResponse(final User user) {
	        return Response.builder()
	        		.email(user.getEmail())
	                .token(user.getToken())
	        		.name(user.getName())
	        		.phone(user.getPhone())
	        		.profileImg(user.getProfileImg())
	        		.role(user.getRole())
	        		.articles(user.getArticles())
	        		.comments(user.getComments())
	        		.bookmarks(user.getBookmarks())
	        		.likeds(user.getLikeds())
	                .build();
	    }
	
	    public static List<Response> toResponseList(final List<User> users) {
	        List<Response> list = new ArrayList<>();
	        for (User user : users) {
	            list.add(toResponse(user));
	        }
	        return list;
	    }
    }
}