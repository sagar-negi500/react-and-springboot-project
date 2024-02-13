import React from "react";
import { Button, Container } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
const Home = () => {
  const notify = () => toast.success("Wow so easy!");
  return (
    <div className="jumbotron bg-secondary text-center">
      <ToastContainer />
      {/* <Jumbotron> */}
      <h1>LEARN CODE this is sagar</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel
        dicta nam, iure natus modi perferendis eos repellendus sequi dolorum
        vero. Earum.
      </p>
      <Container>
        <Button color="primary" outline onClick={notify}>
          Start Using
        </Button>
      </Container>
      {/* </Jumbotron> */}
    </div>
  );
};

export default Home;
