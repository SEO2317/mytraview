package com.mamoorie.mytraview.controller;

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
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
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

        log.warn("중복된 이메일 확인:" + email);

        if (userRepository.existsByEmail(email)) {

            log.warn("checkDuplicatedEmail message: 이메일이 이미 존재합니다");

            return ResponseEntity.badRequest().body("닉네임이 이미 존재합니다.");

        }

        return ResponseEntity.ok().body("해당 이메일은 사용 가능합니다.");
    }


    @GetMapping("/findAll")
    public List<User.Response> findAllUser() {
        List<User> users = userService.findAllUser();

        List<User.Response> response = User.Response.toResponseList(users);

        return response;
    }

    @GetMapping("/find/{email}")
    public ResponseEntity<?> findUser(@PathVariable String email) {
        if (userRepository.existsByEmail(email)) {
            User user = userService.findUser(email);

            User.Response searchUser = User.Response.toResponse(user);

            return ResponseEntity.ok().body(searchUser);
        } else {
            return ResponseEntity.ok().body("검색한 이메일은 없습니다.");
        }

    }


    @PostMapping("/join")
    public ResponseEntity<?> saveUser(@Valid @RequestBody User.Request req) {

//        if (userRepository.existsByEmail(req.getEmail())) {
//
//            return ResponseEntity.badRequest().body("이메일이 이미 존재합니다.");
//
//        }
        String pattern = "^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$";


        boolean i = Pattern.matches(pattern,req.getEmail());
        // log.warn(user.getEmail) == moon@dndwdnwqidnwq
        if(i==true){
            return ResponseEntity.ok().body("알맞는 형식입니다.");
        }

        try {
//            if (req == null || req.getPwd() == null) {
//
//                throw new RuntimeException("잘못된 요청입니다.");
//
//            }

            User user = User.Request.toEntity(req);

//            user.setPwd(passwordEncoder.encode(req.getPwd()));

            User savedUser = userService.saveUser(user);

            User.Response response = User.Response.toResponse(savedUser);

            return ResponseEntity.ok().body(response);

        } catch (Exception e) {

            return ResponseEntity.badRequest().body("잘못된 요청입니다.");

        }

    }


    @PostMapping("/login")
    public ResponseEntity<User.Response> LoginUser(@RequestBody User.Request request) {
        User user = userRepository.findByEmailAndPwd(request.getEmail(), request.getPw());

        String token = jwtTokenProvider.makeJwtToken(user);

        log.warn(user.toString());

        User.Response responseData = User.Response.toResponse(user);

        responseData.setToken(token);

        return ResponseEntity.ok().body(responseData);
//        return userRepository.findByEmail(request.());
    }
    @PutMapping
    public ResponseEntity<?> updateUser(HttpServletRequest request ,String name, @RequestBody User.Request req) {
        User searchUser = (User) userRepository.findByName(req.getName());

        if (userService.checkName(request, searchUser.getName())) {

            req.setName(name);

            List<User> user = userService.update(req, req.getEmail());

            List<User.Response> res = User.Response.toResponseList(user);

            return ResponseEntity.ok().body(res);

        } else {

            return ResponseEntity.badRequest().body(User.Response.builder().resMessage("본인만 가능합니다.").build());

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

            return ResponseEntity.badRequest().body(User.Response.builder().resMessage("본인만 가능합니다.").build());


        }
    }
}