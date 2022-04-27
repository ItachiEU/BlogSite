package com.example.blog;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/app")
public class MainController {

    public MainController() {
    }

    @GetMapping("/test")
    public String getTest(){
        return "You made it!";
    }
}
