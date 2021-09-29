import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    
	return (
		<section className='Footer'>
			<Container fluid>
				<Row className="footerlogo">
					Breton Breaks
				</Row>
				<Row inline className="m-auto d-flex align-items-center">
					<Col md={4} className="text-center">
						<p className="footertitle">infos</p>
						<p>address</p>
						<p>email</p>
					</Col>
					<Col md={4} className="text-center middlecolfooter">
						<p className="footertitle">contacts</p>
						<p>pour reserver</p>
						<p>contacter nous</p>
						<p>phone</p>
					</Col>
					<Col md={4} className="text-center">
						<p className="footertitle">liens</p>
						<p>retrouvez nous</p>
						<p>sur nos reseaux sociaux</p>
					</Col>
				</Row>
				<Row className="footermentions">
					<Link className="footerlink text-center" to="/mentionslegales">
						mentions légales
					</Link>
				</Row>
			</Container>
		</section>
	);
};
    
export default Footer;