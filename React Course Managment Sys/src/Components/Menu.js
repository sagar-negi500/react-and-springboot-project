import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="add-course"
          action
        >
          Add Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-course"
          action
        >
          View Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#"
          action
        >
          About Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#"
          action
        >
          Contact Us
        </Link>
      </ListGroup>
    </div>
  );
};

export default Menu;
