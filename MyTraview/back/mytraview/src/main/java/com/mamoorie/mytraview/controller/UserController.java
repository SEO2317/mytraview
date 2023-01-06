package com.mamoorie.mytraview.controller;


import java.util.List;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

//import com.mamoorie.mytraview.config.jwt.JwtTokenProvider;
//import com.mamoorie.mytraview.config.jwt.JwtTokenProvider;
//import com.mamoorie.mytraview.config.jwt.JwtTokenProvider;

import com.mamoorie.mytraview.entity.User;
import com.mamoorie.mytraview.preferences.jwt.JwtTokenProvider;
import com.mamoorie.mytraview.repository.UserRepository;
import com.mamoorie.mytraview.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;




import com.mamoorie.mytraview.entity.User;
import com.mamoorie.mytraview.preferences.jwt.JwtTokenProvider;
import com.mamoorie.mytraview.repository.UserRepository;
import com.mamoorie.mytraview.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;
import java.util.regex.Pattern;



@RestController
@RequiredArgsConstructor
@RequestMapping("users")
@Slf4j
public class UserController {

    private final JwtTokenProvider jwtTokenProvider;

    private final UserService userService;

    private final UserRepository userRepository;

//    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @GetMapping("/duplicate")
    public ResponseEntity<?> checkDuplicateEmail(@RequestParam String email) {

        log.warn("以묐났�맂 �씠硫붿씪 �솗�씤:" + email);

        if (userRepository.existsByEmail(email)) {

            log.warn("checkDuplicatedEmail message: �씠硫붿씪�씠 �씠誘� 議댁옱�빀�땲�떎");

            return ResponseEntity.badRequest().body("�땳�꽕�엫�씠 �씠誘� 議댁옱�빀�땲�떎.");
        }
        return ResponseEntity.ok().body("�빐�떦 �씠硫붿씪�� �궗�슜 媛��뒫�빀�땲�떎.");
    }


    @GetMapping("/findAll")
    public List<User.Response> findAllUser() {

    	List<User> users = userService.findAllUser();

        List<User.Response> response = User.Response.toResponseList(users);

        return response;
    }

    @GetMapping("/find")
    public ResponseEntity<?> findUser(@PathVariable String email) {
        if (userRepository.existsByEmail(email)) {
            User user = userService.findUser(email);

            User.Response searchUser = User.Response.toResponse(user);

            return ResponseEntity.ok().body(searchUser);
        } else {
            return ResponseEntity.ok().body("寃��깋�븳 �씠硫붿씪�� �뾾�뒿�땲�떎.");
        }

    }


    @PostMapping("/join")
    public ResponseEntity<?> saveUser(@Valid @RequestBody User.Request req) {

//        if (userRepository.existsByEmail(req.getEmail())) {
//
//            return ResponseEntity.badRequest().body("�씠硫붿씪�씠 �씠誘� 議댁옱�빀�땲�떎.");
//
//        }

//        String pattern = "^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$";
//
//
//        boolean i = Pattern.matches(pattern,req.getEmail());
//        // log.warn(user.getEmail) == moon@dndwdnwqidnwq
//        if(i==true){
//            return ResponseEntity.ok().body("�븣留욌뒗 �삎�떇�엯�땲�떎.");
//        }

//        String pattern = "^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$";
//
//        boolean i = Pattern.matches(pattern,req.getEmail());
//        // log.warn(user.getEmail) == moon@dndwdnwqidnwq
//        if(!i){
//            return ResponseEntity.ok().body("�삎�떇�쓣 留욎떠 �엯�젰�븯�꽭�슂.");
//        }


        try {
//            if (req == null || req.getPwd() == null) {
//
//                throw new RuntimeException("�옒紐삳맂 �슂泥��엯�땲�떎.");
//
//            }

            User user = User.Request.toEntity(req);

//            user.setPwd(passwordEncoder.encode(req.getPwd()));

            User savedUser = userService.saveUser(user);

            User.Response response = User.Response.toResponse(savedUser);

            return ResponseEntity.ok().body(response);

        } catch (Exception e) {

            return ResponseEntity.badRequest().body("�옒紐삳맂 �슂泥��엯�땲�떎.");

        }

    }


    @PostMapping("/login")
    public ResponseEntity<User.Response> LoginUser(@RequestBody User.Request request) {
        User user = userRepository.findByEmailAndPw(request.getEmail(), request.getPw());

        String token = jwtTokenProvider.makeJwtToken(user);

        log.warn(user.toString());

        User.Response responseData = User.Response.toResponse(user);

        responseData.setToken(token);

        return ResponseEntity.ok().body(responseData);
    }
    
    @PutMapping
    public ResponseEntity<?> updateUser(HttpServletRequest request, @RequestBody User.Request req) {
        User searchUser = (User) userRepository.findByName(req.getName());

        if (userService.checkName(request, searchUser.getName())) {

            req.setName(req.getName());

            List<User> user = userService.update(req, req.getEmail());

            List<User.Response> res = User.Response.toResponseList(user);

            return ResponseEntity.ok().body(res);

        } else {

            return ResponseEntity.badRequest().body(User.Response.builder().resMessage("蹂몄씤留� 媛��뒫�빀�땲�떎.").build());

        }
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUser(HttpServletRequest request ,String name, @RequestBody User.Request req) {
        User searchUser = userRepository.findByEmail(req.getEmail());
        if (userService.checkName(request, searchUser.getName())) {
            try {
                List<User> user= userService.delete(req.getEmail());

                List<User.Response> res = User.Response.toResponseList(user);

                return ResponseEntity.ok().body(res);

            } catch (Exception e) {

                String err = e.getMessage();

                User.Response res = User.Response.builder().resMessage(err).build();

                return ResponseEntity.badRequest().body(res);
            }
        } else {

            return ResponseEntity.badRequest().body(User.Response.builder().resMessage("蹂몄씤留� 媛��뒫�빀�땲�떎.").build());


        }
    }
}