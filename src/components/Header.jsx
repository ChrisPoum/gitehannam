import { Navbar, Nav, Row, Col, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    
	return (
		<section className='Header'>
			<Container fluid className='overnavigation'>
				<Row inline className="m-auto d-flex align-items-center">
					<Col md={2} className="text-center"> address </Col>
					<Col md={2} className="text-center"> email </Col>
					<Col md={4} className="text-center logotext"> Breton Breaks </Col>
					<Col md={2} className="text-center"> phone </Col>
					<Col md={2} className="text-center"> language </Col>
				</Row>
			</Container>
			<Navbar bg="dark" variant="dark">
				<Navbar.Toggle aria-controls="navbartoggled" />
				<Navbar.Collapse id="navbartoggled">
					<Nav inline className="m-auto d-flex align-items-center">
						<Nav.Link> 
							<Link className="navbarlink" to="/"> Acceuil </Link>
						</Nav.Link>   
						<Nav.Link> 
							<Link className="navbarlink" to="/"> About </Link>
						</Nav.Link> 
						<Nav.Link>
							<Link className="navbarlink" to="/"> Contacts </Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</section>
	);
};
    
export default Header;