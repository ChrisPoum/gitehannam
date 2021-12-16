import { Navbar, Nav, Row, Col, Container, Button, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiHouse } from "react-icons/gi";
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
					<Col md={2} className="text-center headercontent">
						<a 
							href="https://www.google.fr/maps/place/15+All.+des+Violettes,+29600+Saint-Martin-des-Champs/@48.5818244,-3.8717121,13z/data=!4m5!3m4!1s0x481160d41bb5eae5:0x965f530bb35122fc!8m2!3d48.5794928!4d-3.8422722"
							className="links d-inline-flex mt-1"
						>
							<GiHouse 
							className="houseicon"
							size={30} 
							alt="icone maison"
							/>
							<span className="text-justify">
								{t("address1")}
							</span>
						</a>
					</Col>
					<Col md={2} className="text-center headercontent"> 
						<a href="mailto:lamaisonblanche@gmail.com" 
							className="links d-inline-flex mt-1"
						>
							< HiOutlineMailOpen 
							className="iconletter"
							size={30}
							alt="icone courrier"
							/>
							<span className="mt-1">
								{t("email")}
							</span>
						</a>
					</Col>
					<Col xs={7} md={4} className="text-center"> 
						<Link className="logotext" to="/">
							Breton Breaks 
						</Link>
					</Col>
					<Col md={2} className="text-center headercontent"> 
						<a href="tel:0033789029200" 
							className="links d-inline-flex mt-1"
						>
							<FiPhone 
							className="iconphone"
							size={30}
							alt="icone téléphone"
							/>
							<span className="phonenumber">
								0789029200
							</span>
						</a>
					</Col>
					<Col xs={5} md={2} className="text-center">
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
						<NavItem> 
							<Link className="navbarlink px-4" to="/"> 
								{t("home")} 
							</Link>
						</NavItem>
						<NavItem> 
							<Link className="navbarlink px-4" to="/booking"> 
								{t("booking")}
							</Link>
						</NavItem>   
						<NavItem>
							<Link className="navbarlink px-4" to="/contacts"> 
								Contacts 
							</Link>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</section>
	);
};
    
export default Header;