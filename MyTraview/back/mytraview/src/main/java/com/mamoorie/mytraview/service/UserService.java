package com.mamoorie.mytraview.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.mamoorie.mytraview.entity.User;
import com.mamoorie.mytraview.preferences.jwt.JwtTokenProvider;
import com.mamoorie.mytraview.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final JwtTokenProvider jwtTokenProvider;

    public User saveUser(User newUser){
        return userRepository.save(newUser);
    }

    public List<User> findAllUser() {
        return userRepository.findAll();
    }

    public User findUser(String name) {
        return userRepository.findByName(name);
    }

    public User LoginUser(User.Request request){
        return userRepository.findByEmail(request.getEmail());
    }
    
    private void validation(final User user) {

        if (user == null) {

            throw new RuntimeException("user는 null 허용 불가");
        }

    };


    public List<User> retrieve(final String name) {

        return (List<User>) userRepository.findByName(name);
    }

    public List<User> update(final User.Request req, String email){
        User checkUser = User.Request.toEntity(req);
        validation(checkUser);
        final User user = userRepository.findByEmail(email);
        user.setPw(req.getPw());
        user.setName(req.getName());
        user.setPhone(req.getPhone());
        userRepository.save(user);
        return retrieve(req.getName());
    }



    public List<User> delete(final String email) {

        User findUser = userRepository.findByEmail(email);

        try {

            userRepository.deleteAll();

            userRepository.deleteByEmail(email);

        } catch (Exception e) {

            log.error("User 삭제 중 에러 발생.", e);

            throw new RuntimeException("삭제 중 에러 발생" + email);
        }

        return retrieve(findUser.getName());
    }

//    public User getByCredentials(final String nickName, final String pwd, final PasswordEncoder encoder) {
//
//        final User originalUser = userRepository.findByNickName(nickName);
//
//        if(originalUser != null && encoder.matches(pwd, originalUser.getPwd())) {
//
//            return originalUser;
//
//        }
//        return null;
//
//    }


    public boolean checkName(HttpServletRequest request, String name) {
        String token = parseBearerToken(request);
        String psName = jwtTokenProvider.validateAndGetName(token);
        System.out.println(psName);
        if (psName.equals(name)) {
            return true;
        } else {
            return false;
        }
    }

    private String parseBearerToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}