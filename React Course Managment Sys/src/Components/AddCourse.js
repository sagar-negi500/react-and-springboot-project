import React, { Fragment, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import axios from "axios";
import base_url from "../BootApi";
import { toast } from "react-toastify";

const AddCourse = () => {
  const [course, setCourse] = useState({});

  // form handler functionl

  const handelForm = (e) => {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  };

  // creatint  function to poist data to server

  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("course added succesfully");
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.success("error something went wrong ");
      }
    );
  };
  return (
    <Fragment>
      <Form onSubmit={handelForm}>
        <FormGroup>
          <label className="text-left" For="userId">
            Course Id
          </label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Enter Title here"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            type="text"
            id="description"
            placeholder="Enter Description here"
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
            style={{ height: 100 }}
          />
        </FormGroup>

        <Container>
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button type="reset" color="warning ms-2">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
