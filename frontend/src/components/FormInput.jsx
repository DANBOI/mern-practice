import { Form } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const FormInput = ({ label, type, placeholder, state, handler }) => {
  placeholder ||= `Your ${label}`;
  return (
    <>
      <Form.Group className="text-start my-3" controlId={type}>
        <Form.Label className="text-capitalize font-monospace px-2">
          {label}:
        </Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={state}
          onChange={(e) => handler(e.target.value)}
        ></Form.Control>
      </Form.Group>
    </>
  );
};

export default FormInput;
