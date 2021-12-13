import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import hostpicture from "../assets/chrishannam.webp";

const Contacts = () => {
	const { t } = useTranslation();
    
	return (
		<section className='Contacts'>
			<Helmet>
				<meta charset="utf-8" />
				<link rel="icon" href="./triskelesmall.png" />
				<link rel="apple-touch-icon" href="./triskelesmall.png" />
				<link rel="manifest" href="https://www.bretonbreaks.com/manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Contacter vos hôtes et réserver vos vacances avec Breton Breaks, grande maison avec 10 couchages pour des locations 
					de les vacances dans la baie de Morlaix, 
					15 allée des violettes 29600 Saint-Martin-Des-Champs."
				/>
				<title>Breton Breaks - Contacts</title>	
			</Helmet>
			<h2 className="text-center mb-3 subtitle">Contacts</h2>
			<Row className="d-flex justify-content center">
				<Col
					className="d-flex justify-content-end responsiveprofile" 
					md={5}
				>
					<img 
						className="profile"
						src={hostpicture}
						alt="Christopher and Françoise Hannam"
					/>
				</Col>
				<Col md={7} className="mt-4">
					<p className="profiletitle">
						{t("profiletitle")}
					</p>
					<p className="responsivetext"> 
						{t("language")} : {t("engfr")} 
					</p>
					<p className="responsivetext">
						{t("superhost")}
					</p>
				</Col>
			</Row>	
			<Row 
				className="d-flex justify-content-center mt-4"
			>
				<Col 
					className="d-flex justify-content-end responsivetag" 
					md={5}
					s={12}
				>
					{t("addresstag")} :
				</Col>
				<Col 
					className="responsivetext"
					md={7}
					s={12}
				>
					<a 
						href="https://www.google.fr/maps/place/15+All.+des+Violettes,+29600+Saint-Martin-des-Champs/@48.5818244,-3.8717121,13z/data=!4m5!3m4!1s0x481160d41bb5eae5:0x965f530bb35122fc!8m2!3d48.5794928!4d-3.8422722"
						className="links"
					>
						<p>{t("address2a")}</p>
						<p>{t("address2b")}</p>
					</a>
				</Col>
			</Row>
			<Row 
				className="d-flex justify-content-center"
			>
				<Col 
					className="d-flex justify-content-end responsivetag" 
					md={5}
					s={12}
				>
					{t("emailtag")} :
				</Col>
				<Col 
					className="responsivetext"
					md={7}
					s={12}
				>
					<a href="mailto:lamaisonblanche@gmail.com" className="links">
						<p>{t("email")}</p>
					</a>
				</Col>
			</Row>
			<Row 
				className="d-flex justify-content-center responsiveend"
			>
				<Col 
					className="d-flex justify-content-end responsivetag" 
					md={5}
					s={12}
				>
					{t("phonetag")} :
				</Col>
				<Col 
					className="responsivetext"
					md={7}
					s={12}
				>
					<a href="tel:0033789029200" className="links">
						<p>+(33)0789029200</p>
					</a>
				</Col>
			</Row>			
		</section>
	);
};
    
export default Contacts;