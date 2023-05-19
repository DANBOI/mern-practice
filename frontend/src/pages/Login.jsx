import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../layouts/FormContainer";
import FormInput from "../components/FormInput";

const Login = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    alert("submit");
  };

  return (
    <FormContainer>
      <h1>Log In</h1>
      <Form className="mt-3" onSubmit={submitHandler}>
        <FormInput type="email" />
        <FormInput type="password" />
        <Button type="submit" variant="dark" className="mt-3 px-5">
          Log In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New here?
          <Link className="px-2 text-decoration-none" to={`/signup`}>
            Sign up
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
