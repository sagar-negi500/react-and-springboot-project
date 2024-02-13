import React from "react";
import axios from "axios";
import base_url from "../BootApi";

import { toast } from "react-toastify";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";

const Course = ({ course, update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/course/${id}`).then(
      (response) => {
        toast.success("course deleted");
        update(id);
      },
      (error) => {
        toast.success("course not deleted  serverproblem");
      }
    );
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="text-center">{course.title}</CardTitle>
          <CardText className="text-center">{course.description}</CardText>
          <Container className="text-center">
            <Button
              className="bg-danger"
              onClick={() => {
                deleteCourse(course.id);
              }}
            >
              Delete
            </Button>
            <Button className="bg-warning ms-3">Update</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;
