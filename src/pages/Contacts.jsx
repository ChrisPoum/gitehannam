import { Col, Row, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const Contacts = () => {
	const { t } = useTranslation();
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		console.log("coucou!")
	};
    
	return (
		<section className='Contacts'>
			<Helmet>
				<meta charset="utf-8" />
				<link rel="icon" href="./triskelesmall.png" />
				<link rel="apple-touch-icon" href="./triskelesmall.png" />
				<link rel="manifest" href="./manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Contacter vos hôtes et réserver vos vacances avec Breton Breaks, grande maison avec 10 couchages pour des locations 
					de les vacances dans la baie de Morlaix, 
					15 allée des violettes 29600 Saint-Martin-Des-Champs."
				/>
				<title>Breton Breaks</title>
			</Helmet>
			<h2 className="text-center">Contacts</h2>
			<Row 
				className="d-flex justify-content-center mt-4"
			>
				<Col 
					className="d-flex justify-content-end" 
					md={5}
				>
					{t("addresstag")} :
				</Col>
				<Col 
					className=""
					md={7}
				>
					<a 
						href="https://www.google.fr/maps/place/15+All.+des+Violettes,+29600+Saint-Martin-des-Champs/@48.5818244,-3.8717121,13z/data=!4m5!3m4!1s0x481160d41bb5eae5:0x965f530bb35122fc!8m2!3d48.5794928!4d-3.8422722"
						className="links"
					>
						{t("address1")}
					</a>
				</Col>
			</Row>
			<Row 
				className="d-flex justify-content-center"
			>
				<Col 
					className="d-flex justify-content-end" 
					md={5}
				>
					{t("emailtag")} :
				</Col>
				<Col 
					className=""
					md={7}
				>
					<a href="mailto:lamaisonblanche@gmail.com" className="links">
						{t("email")}
					</a>
				</Col>
			</Row>
			<Row 
				className="d-flex justify-content-center"
			>
				<Col 
					className="d-flex justify-content-end" 
					md={5}
				>
					{t("phonetag")} :
				</Col>
				<Col 
					className=""
					md={7}
				>
					<a href="tel:0033789029200" className="links">
						+(33)0789029200
					</a>
				</Col>
			</Row>
			<div
				className="d-flex justify-content-center mt-5 mb-5"
			>
				<Form
					className="contactform"
					ref={form}
					onSubmit={sendEmail}
				>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>
					<Button className="btn-lg custombutton4" type="submit">
						send
					</Button>
				</Form>
			</div>			
		</section>
	);
};
    
export default Contacts;