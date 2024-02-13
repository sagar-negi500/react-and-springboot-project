package com.springboot.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.springboot.dao.CourseDao;
import com.springboot.entity.Course;

@Service
public class CourseServiceImpl implements CourseServices {
	
	@Autowired
	private CourseDao courseDao;
	
//	List <Course> list;
	
	public  CourseServiceImpl() {
//		
//		
////		list =new ArrayList<>();
////		list.add(new Course(1,"java","this is java programming"));
////		list.add(new Course(2,"python","this is python programming"));
//
//		
//		
	}
//	

	 @Override
	 public List <Course> getCourses(){
		 return  courseDao.findAll();
	 }

	 
//	 {{get by Id without responseentity}}

//	@Override
//	public Course getCourse(long courseId) {
//		 Optional<Course> emp=courseDao.findById(courseId);
////		Course c=null;
////		
////		for(Course course:list) {
////			if(course.getId()==courseId) {
////				c=course;
////				break;
////			}
////		}
//		
//		return emp.get();
//	}
	 
//	 {{get by Id with responseentity}}
	 @Override
		public ResponseEntity<Course> getCourse(long courseId) {
		 Optional<Course> emp=courseDao.findById(courseId);
		 if(emp.isPresent()) {
			 return new ResponseEntity <Course>(emp.get(),HttpStatus .OK);
		 }else {
			 return new ResponseEntity <Course>(HttpStatus .INTERNAL_SERVER_ERROR);
		 }
			
			
		}


	@Override
	public Course addCourse(Course course) {
//		list.add(course);
	    courseDao.save(course);
		return course;
	}


	@Override
	public Course deleteAllCourse() {
		
//		list.removeAll(list);
		courseDao.deleteAll();
		return null;
	}


//	@Override
//	public Course delete(long courseId) {
//		
//		 Optional<Course> emp=courseDao.findById(courseId);
////		Course c=null;
////		for(Course course:list) {
////			if(course.getId()==courseId) {
////				c=course;
////				list.remove(course);
////				break;
////			}
////		}
//		Course entity=emp.get();
//		courseDao.delete(entity);
//		return entity ;
//	}
	@Override
	public ResponseEntity<Course> delete(long courseId) {
		 Optional<Course> empt=courseDao.findById(courseId);
		 if(empt.isPresent()) {
			Course en= empt.get();
			courseDao.delete(en);
			 return new ResponseEntity <>(en,HttpStatus .OK);
		 }else {
			 return new ResponseEntity <>(HttpStatus .INTERNAL_SERVER_ERROR);
		 }
		
	}


	@Override
	public Course update(Course course) {
		
//		list.forEach(e ->{
//			if(e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		courseDao.save(course);
		return course;
	}

	
}
