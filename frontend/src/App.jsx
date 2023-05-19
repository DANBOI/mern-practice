import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      {/*for page routing */}
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
