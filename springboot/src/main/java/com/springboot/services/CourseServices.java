package com.springboot.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.springboot.entity.Course;

public interface CourseServices {
  public List <Course> getCourses();
  
//  public Course getCourse(long courseId);
  
  public ResponseEntity<Course>getCourse(long courseId);
  
  public Course addCourse(Course course);
  
  public Course deleteAllCourse();
  
//  public Course delete(long courseId);
  public ResponseEntity<Course>delete(long courseId);
  
  public Course update(Course course);
}
