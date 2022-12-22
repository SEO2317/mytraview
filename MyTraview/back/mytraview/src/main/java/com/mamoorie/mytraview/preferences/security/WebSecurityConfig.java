//package com.mamoorie.mytraview.preferences.security;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//
//@RequiredArgsConstructor
//@Slf4j
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    private JwtAuthenticationFilter jwtAuthenticationFilter;
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.cors().and().csrf().disable().httpBasic().disable().sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().authorizeRequests()
//                .antMatchers("/", "/users/**", "/post/**", "/article/**", "place/**").permitAll().anyRequest()
//                .authenticated();
//
//        http.addFilterAfter(jwtAuthenticationFilter, CorsFilter.class);
//    }
//
//}
