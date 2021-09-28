import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <section class="page_404">
      <Container className="container">
        <Row className="row"> 
          <Col className="col text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>
            <div className="contant_box_404">
              <h3 className="h2">
              Look like you're lost
              </h3>
              <p>the page you are looking for not avaible!</p>
              <Link to="/" class="link_404">Home</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;