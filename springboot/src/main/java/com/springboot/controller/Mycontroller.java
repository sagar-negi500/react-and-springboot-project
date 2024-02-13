package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.entity.Course;
import com.springboot.services.CourseServices;

@RestController
@CrossOrigin(origins = "*")
public class Mycontroller {
	
	@Autowired
	private CourseServices courseServices;

	@GetMapping("/home")
	public String home() {
		return "this is home page";
	}
	
	@GetMapping("/courses")
//	@CrossOrigin(origins = "*")
	public List <Course> getCourses(){
		
		return this.courseServices.getCourses();
		
	}
	
//	{{get by Id without responseentity}}
//	@GetMapping("/course/{courseId}")
//	public Course getcourse(@PathVariable String courseId ) {
//		return this.courseServices.getCourse(Long.parseLong(courseId));
//	}
	
//	{{get by Id with responseentity}}
	
	@GetMapping("/course/{courseId}")
	public ResponseEntity<Course>getCourse(@PathVariable String courseId){
		return this.courseServices.getCourse(Long.parseLong(courseId));

	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return this.courseServices.addCourse(course);
	}
	
	@DeleteMapping("/courses")
	public Course deleteAllCourse() {
		return this.courseServices.deleteAllCourse();
	}
	
//	@DeleteMapping("/courses/{courseId}")
//	public Course delete(@PathVariable String courseId) {
//		return this.courseServices.delete(Long.parseLong(courseId));
//	}
	
	@DeleteMapping("/course/{courseId}")
	public ResponseEntity<Course>delete(@PathVariable String courseId){
		return this.courseServices.delete(Long.parseLong(courseId));

	}
	
	@PutMapping("/courses")
	public Course update(@RequestBody Course course  ) {
		return this.courseServices.update(course);
	}
	
}
