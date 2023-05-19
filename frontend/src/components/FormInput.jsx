import { Form } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const FormInput = ({ label, type, state, handler }) => {
  return (
    <>
      <Form.Group className="text-start my-3" controlId={type}>
        <Form.Label className="text-capitalize font-monospace px-2">
          {label}:
        </Form.Label>
        <Form.Control
          type={type}
          placeholder={`Your ${label}`}
          value={state}
          onChange={(e) => handler(e.target.value)}
        ></Form.Control>
      </Form.Group>
    </>
  );
};

export default FormInput;
