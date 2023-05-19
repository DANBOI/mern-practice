import { Container, Row, Col } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6} className="card p-5 bg-light text-center">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
