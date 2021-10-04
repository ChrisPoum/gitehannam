import { Button, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import imageleft from "../assets/tourismpictures/rueangedeguernisac.jpg";
import imagebottomleft from "../assets/tourismpictures/chateaudutaureau.jpg";
import imagebottomcenter from "../assets/tourismpictures/viaducmorlaix.jpg";
import imagebottomright from "../assets/tourismpictures/ilelouetettaureau.jpg";

const TourismSlider = () => {
	const { t } = useTranslation();
    
	return (
		<div className='TourismSlider'>
			<Row>
				<Col lg={4} md={4} mb={4} mb-lg={0}>
					<img
						src={imageleft}
						className="w-100 shadow-1-strong rounded mb-4 imageleft"
						alt="rue ange de Guernisac à Morlaix, maison à colombage."
					/>
				</Col>

				<Col lg={8} mb={8} mb-lg={0} className="paragraph3">
					<p>
						{t("paragraph3a")}
					</p>
					<p>
						{t("paragraph3b")}
					</p>
					<p>
						{t("paragraph3c")}
					</p>
					<Button className="custombutton3 btn-lg my-3">
						<a className="customlink3" href="http://www.baiedemorlaix.bzh/fr/">
							Découvrez en plus !
						</a>
					</Button>
				</Col>
			</Row>
			<Row>
				<Col lg={4} mb={4} mb-lg={0}>
					<img
						src={imagebottomleft}
						className="w-100 shadow-1-strong rounded mb-4 imagebottomleft"
						alt="Voiliers devant le chateau du Taureau dans la baie de Morlaix."
					/>
				</Col>
				<Col lg={4} mb={4} mb-lg={0}>
					<img
						src={imagebottomcenter}
						className="w-100 shadow-1-strong rounded mb-4 imagebottomcenter"
						alt="le viaduc dans le centre ville de Morlaix."
					/>
				</Col>
				<Col lg={4} mb={4} mb-lg={0}>
					<img
						src={imagebottomright}
						className="w-100 shadow-1-strong rounded mb-4 imagebottomright"
						alt="le phare de l'île Louet dans la baie de Morlaix."
					/>
				</Col>
			</Row>
		</div>
	);
};
    
export default TourismSlider;