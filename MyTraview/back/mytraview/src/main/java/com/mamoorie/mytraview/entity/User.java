package com.mamoorie.mytraview.entity;

<<<<<<< HEAD
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
=======
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.*;
>>>>>>> 2f2ff1ef94e845f45563caae9f35f5a2eb2476cc

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "USER_INFO")
public class User {
<<<<<<< HEAD
	
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Integer id;
	
	@Id
    @Column(name = "USER_EMAIL", length = 100)
    @Email
=======

    @Id
    @Column(name = "USER_EMAIL", length = 100)
>>>>>>> 2f2ff1ef94e845f45563caae9f35f5a2eb2476cc
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
	@JsonManagedReference(value =  "user-article")
    private List<Article> articles;

    @OneToMany(mappedBy = "user")
	@JsonManagedReference(value =  "user-comment")
    private List<Comment> comments;

    @OneToMany(mappedBy = "user")
	@JsonManagedReference(value =  "user-bookmark")
    private List<Bookmark> bookmarks;
    
    @OneToMany(mappedBy = "user")
	@JsonManagedReference(value =  "user-liked")
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

        private String resMessage;
        
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 2f2ff1ef94e845f45563caae9f35f5a2eb2476cc
