import { Form } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const FormInput = ({ type }) => {
  return (
    <>
      <Form.Group className="text-start my-3" controlId={type}>
        <Form.Label className="text-capitalize font-monospace px-2">
          {type}:
        </Form.Label>
        <Form.Control
          type={type}
          placeholder={`Your ${type}`}
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
      </Form.Group>
    </>
  );
};

export default FormInput;
