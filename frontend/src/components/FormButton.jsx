import { Button, Spinner } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const FormButton = ({ loading, text }) => {
  return (
    <Button type="submit" variant="dark" className="mt-5 px-5">
      {loading ? (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          style={{ padding: "0 20px" }}
        ></Spinner>
      ) : (
        text
      )}
    </Button>
  );
};

export default FormButton;
