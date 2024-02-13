import "./styles.css";
import Home from "./Components/Home";
import { Button, Container, Row, Col } from "reactstrap";

import Header from "./Components/Header";
import Course from "./Components/Course";
import AddCourse from "./Components/AddCourse";
import Menu from "./Components/Menu";
import AllCourse from "./Components/AllCourse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Row>
            <Col xs={4}>
              <Menu />
            </Col>
            <Col xs={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-course" element={<AllCourse />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}
