import { useSelector } from "react-redux";
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Container className="py-5 px-md-5">
      <Card className="p-5 d-flex-column gap-4 align-items-center text-center hero-card bg-light ">
        <h1>MERN Stack</h1>
        <p className="text-secondary fs-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          obcaecati iure laboriosam deleniti minima quaerat commodi, recusandae
          quod labore magnam ex? Nostrum illo numquam quo repellat, accusamus
          nam accusantium quaerat.
        </p>
        <div className="d-flex gap-3">
          {!userInfo && (
            <LinkContainer to="/login">
              <Button variant="dark">Log In</Button>
            </LinkContainer>
          )}
          <LinkContainer to="/signup">
            <Button variant="outline-secondary">
              Sign Up
              {userInfo && " A NEW Account"}
            </Button>
          </LinkContainer>
        </div>
      </Card>
    </Container>
  );
};

export default Hero;
