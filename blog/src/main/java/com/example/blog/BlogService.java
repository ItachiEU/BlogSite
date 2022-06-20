package com.example.blog;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Service
public class BlogService {
    public Blog createBlog(String description, String textContent,
                           String tag, Integer likesNum, MultipartFile file) {
        Blog n = new Blog();
        try {
            n.setImage(file.getBytes());
        } catch (Exception e) {
            byte[] empty = {};
            n.setImage(empty);
        }

        n.setDescription(description);
        n.setTextContent(textContent);
        n.setTag(tag);
        n.setLikesNum(likesNum);

        return n;
    }
}
