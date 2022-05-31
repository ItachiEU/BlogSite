package com.example.blog;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.blog.Tag;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TagRepository extends CrudRepository<Tag, Integer> {
    @Modifying
    @Transactional
    @Query("delete Tag t  where t.tag = :tag")
    void deleteTag(@Param(value = "tag") String tag);
}
