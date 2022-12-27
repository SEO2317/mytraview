package com.mamoorie.mytraview.preferences.jwt;

import com.mamoorie.mytraview.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@RequiredArgsConstructor
@Component
public class JwtTokenProvider {

    private final static String SECRET_KEY = "dlrjqjsdurgksmstkfkaqkqhdlazz";

    public String makeJwtToken(User user) {
        Date revalidated = Date.from(Instant.now().plus(1, ChronoUnit.DAYS));

        return Jwts.builder().signWith(SignatureAlgorithm.HS512, String.valueOf(SECRET_KEY)).setSubject(user.getName())
                .setIssuer("mytraview app").setIssuedAt(new Date()).setExpiration(revalidated).compact();
    }

    public String validateAndGetEmail(String token) {
        Claims claims = Jwts.parser().setSigningKey(String.valueOf(SECRET_KEY)).parseClaimsJws(token).getBody();

        return claims.getSubject();
    }
}
