package com.jb.simple_security.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.jb.simple_security.entity.User;
import com.jb.simple_security.repo.UserRepository;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepo;

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public String register(User user) {
        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
            return "Email Already Exists";
        }
        user.setPassword(encoder.encode(user.getPassword()));
        userRepo.save(user);
        return "Register Successfull";
    }

    public String login(String email, String password) {
        Optional<User> user = userRepo.findByEmail(email);
        if (user.isPresent() && encoder.matches(password, user.get().getPassword())) {
            return "Login Sucessfull";
        }
        return "Invalid Email or Password";
    }

}