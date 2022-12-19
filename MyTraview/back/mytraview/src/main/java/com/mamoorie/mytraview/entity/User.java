//package com.mamoorie.mytraview.entity;
//
//import javax.persistence.Id;
//import javax.validation.constraints.Email;
//
//public class User {
//
//    @Email
//    @Id
//    @Column(name = "USER_EMAIL", length = 100)
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private String Email;
//
//    @Column(name = "USER_PASSWORD", length = 100, nullable = false)
////    @NotNull
//    private String pwd;
//
//    private String token;
//
//    @Column(name = "USER_NAME")
////    @NotNull
//    private String name;
//
//    @Column(name = "USER_PHONE")
////    @NotNull
//    private String phone;
//
//    @OneToMany(mappedBy = "User")
//    private List<Article> articles;
//
//    @OneToMany(mappedBy = "User")
//    private List<Comment> comments;
//
//    @Enumerated(EnumType.STRING)
//    private Role role;
//
////    @OneToMany(mappedBy = "User")
////    private List<Bookmark> bookmarks;
//
//    @OneToMany(mappedBy = "User")
//    private List<Article> likedArticles;
//
////    @Column(name = "prof_Img", nullable = true)
////    private String profileImg;
//
//
//    public static class Request {
//        private String email;
//        private String pwd;
//        private List<Article> articles;
//        private List<Comment> comments;
//        private String phone;
//        private String name;
//        private Role role;
////        private String profileImg;
//
//
//        public static User toEntity(final Request request) {
//            return User.builder().email(request.getEmail()).pwd(request.getPwd())
//                    .articles(request.articles).comments(request.comments).phone(request.getPhone())
//                    .name(request.getName()).role(request.getRole()).build();
//        }
//
//
//    }
//
//
//}
