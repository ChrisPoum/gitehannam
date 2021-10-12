import { Navbar, Nav, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";
import { i18n } from "../locales/i18n.js";
import { useTranslation } from "react-i18next";

const Header = ({setLanguage, language}) => {
	const { t } = useTranslation();

	const handleOnclick=(e)=>{
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
    
	return (
		<section className='Header'>
			<Container fluid className='overnavigation'>
				<Row className="m-auto d-flex align-items-center">
					<Col md={2} className="text-center">
						<Row>
							<Col md={2}>
								< BsHouseDoor 
								className="icons mt-3"
								size={30} 
								/>
							</Col>
							<Col md={10}>
								<a 
									href="https://www.google.fr/maps/place/15+All.+des+Violettes,+29600+Saint-Martin-des-Champs/@48.5818244,-3.8717121,13z/data=!4m5!3m4!1s0x481160d41bb5eae5:0x965f530bb35122fc!8m2!3d48.5794928!4d-3.8422722"
									className="links"
								>
									{t("address1")}
								</a>
							</Col>
						</Row> 
					</Col>
					<Col md={2} className="text-center"> 
						<Row >
							<Col md={2}>
								< HiOutlineMailOpen 
								className="icons"
								size={30}
								/>
							</Col>
							<Col md={10} className="mt-1">
								<a href="mailto:lamaisonblanche@gmail.com" className="links">
									{t("email")}
								</a>
							</Col>
						</Row>
					</Col>
					<Col md={4} className="text-center logotext"> Breton Breaks </Col>
					<Col md={2} className="text-center"> 
						<Row >
							<Col md={2}>
								<FiPhone 
								className="icons"
								size={30}
								/>
							</Col>
							<Col md={10} >
								<a href="tel:0033789029200" className="phonelink">
									+(33)0789029200
								</a>
							</Col>
						</Row>
					</Col>
					<Col md={2} className="text-center">
						<div id="buttonlanguage">
						{(
							language === "fr" && (
									<Button className="buttoncustom" value="en" onClick={handleOnclick}>
										English <ReactCountryFlag countryCode="GB" svg alt="english flag" className="flag"/>
									</Button>
							)) || (
							language === "en" && (
									<Button className="buttoncustom" value="fr" onClick={handleOnclick}>
										Français <ReactCountryFlag countryCode="FR" svg alt="drapeau français" className="flag"/>
									</Button>
							))
						}
						</div>
					</Col>
				</Row>
			</Container>
			<Navbar className="colornav" variant="dark">
				<Navbar.Toggle aria-controls="navbartoggled" />
				<Navbar.Collapse id="navbartoggled">
					<Nav className="m-auto d-flex">
						<Nav.Link> 
							<Link className="navbarlink px-4" to="/"> 
								{t("home")} 
							</Link>
						</Nav.Link>
						<Nav.Link> 
							<Link className="navbarlink px-4" to="/booking"> 
								{t("booking")}
							</Link>
						</Nav.Link>   
						<Nav.Link>
							<Link className="navbarlink px-4" to="/contacts"> 
								Contacts 
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</section>
	);
};
    
export default Header;