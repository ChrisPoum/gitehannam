import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import hostpicture from "../assets/chrishannam.webp";
import { Helmet } from "react-helmet";

const AboutUs = () => {
	const { t } = useTranslation();

	return (
		<section className='AboutUs'>
			<Helmet>
				<meta charset="utf-8" />
				<link rel="icon" href="./triskelesmall.png" />
				<link rel="apple-touch-icon" href="./triskelesmall.png" />
				<link rel="manifest" href="./manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Christopher et Françoise Hannam vous reçoivent chez eux, Breton Breaks"
				/>
				<title>Breton Breaks</title>
			</Helmet>
			<Row className="d-flex justify-content center">
				<Col
					className="d-flex justify-content-end" 
					md={5}
				>
					<img 
						className="profile"
						src={hostpicture}
						alt="Christopher and Françoise Hannam"
					/>
				</Col>
				<Col md={7}>
					<h2>
						{t("host")}
					</h2>
					<p className="profiletitle">
						{t("profiletitle")}
					</p>
					<p> 
						{t("language")} : {t("engfr")} 
					</p>
					<p>
						{t("superhost")}
					</p>
					<Button 
						className="btn-lg custombutton4"
					>
						<Link 
							className="customlink4" 
							to="/contacts"
						>
							{t("contactus")}
						</Link>
					</Button>
				</Col>
			</Row>		
		</section>
	);
};
    
export default AboutUs;