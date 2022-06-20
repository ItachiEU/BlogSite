package com.example.blog;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class Tag {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String tag_name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTag() {
        return tag_name;
    }

    public void setTag(String tag_name) {
        this.tag_name = tag_name;
    }

}
