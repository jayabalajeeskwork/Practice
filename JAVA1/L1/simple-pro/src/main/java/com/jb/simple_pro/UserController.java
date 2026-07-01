package com.jb.simple_pro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {

    @Autowired
    private UserRepository repo;

    @GetMapping("/")
    public String registerPage() {
        return "register";
    }

    @PostMapping("/register")
    public String register(User user) {

        repo.save(user);

        return "redirect:/login";
    }

    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    @PostMapping("/login")
    public String login(
            @RequestParam String email,
            @RequestParam String password,
            Model model) {

        User user = repo.findByEmailAndPassword(
                email,
                password);

        if (user != null) {

            model.addAttribute("username", user.getUsername());

            return "dashboard";
        }

        return "login";
    }
}