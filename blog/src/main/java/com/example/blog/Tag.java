package com.example.blog;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class Tag {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String tag;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

}
