package com.springboot.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.entity.Course;

public interface CourseDao extends JpaRepository<Course,Long>{

}
