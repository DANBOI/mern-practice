import { Container, Card, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column gap-4 align-items-center text-center hero-card bg-light w-75">
          <h1>MERN Stack</h1>
          <p className="text-secondary fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            obcaecati iure laboriosam deleniti minima quaerat commodi,
            recusandae quod labore magnam ex? Nostrum illo numquam quo repellat,
            accusamus nam accusantium quaerat.
          </p>
          <div className="d-flex">
            <Button variant="dark" href="/login" className="me-3">
              Log In
            </Button>
            <Button variant="outline-secondary" href="/signup">
              Sign Up
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
