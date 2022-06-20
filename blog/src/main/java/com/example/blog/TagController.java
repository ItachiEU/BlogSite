package com.example.blog;

import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.multipart.MultipartFile;


@RestController // This means that this class is a Controller
@RequestMapping(path="/app") // This means URL's start with /app (after Application path)
public class TagController {
    @Autowired
    private TagRepository tagRepository;

    @PostMapping(path="/tag")
    public @ResponseBody String addNewTag (@RequestParam String tag){
        Tag n = new Tag();
        n.setTag(tag);
        tagRepository.save(n);
        return "Saved";

    }
    @DeleteMapping(path="/tag")
    public @ResponseBody String deleteTag (@RequestParam String tag){
        tagRepository.deleteByTag(tag);
        return "Deleted";

    }
    @GetMapping(path="/tag")
    public @ResponseBody Iterable<Tag> getAllTags() {
        // This returns a JSON or XML with the tags

        return tagRepository.findAll();
    }

    public TagController() {
    }
}
