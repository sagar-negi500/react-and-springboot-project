import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../BootApi";
import { toast } from "react-toastify";
import axios from "axios";

const AllCourse = () => {
  const [courses, setCoures] = useState([
    // { title: "java", discription: "this is java" },
    // { title: "django", discription: "this is django" },
  ]);

  // useEffect(() => {
  //   document.title = "All Courses";
  // }, []);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // for success
        console.log(response.data);
        toast.success("Courses has been loaded");

        setCoures(response.data);
      },
      (error) => {
        // for error
        console.error("Error fetching courses:", error);
        toast.error("Failed to fetch courses. Error: " + error.message);
      }
    );
  };
  // callling loading getaallcourse function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const updateCourseById = (id) => {
    setCoures(courses.filter((c) => c.id != id));
  };

  return (
    <div>
      <h1>all course</h1>
      <p>list of all Courses</p>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={updateCourseById} />
          ))
        : "no course available"}
    </div>
  );
};

export default AllCourse;
