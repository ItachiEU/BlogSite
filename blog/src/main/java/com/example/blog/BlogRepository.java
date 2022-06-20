package com.example.blog;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.blog.Blog;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface BlogRepository extends CrudRepository<Blog, Integer> {
    @Modifying
    @Transactional
    @Query("update Blog b set b.likesNum = :likesNum where b.id = :id")
    void updateLikesNum(@Param(value = "id") Integer id, @Param(value = "likesNum") Integer likesNum);

    @Query("select b from Blog b where b.tag = :tag")
    Iterable <Blog> findBlogsWithTag(@Param(value = "tag") String tag);
}
