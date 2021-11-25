import { Button, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import imageleft from "../assets/tourismpictures/rueangedeguernisac.jpg";
import imagebottomleft from "../assets/tourismpictures/chateaudutaureau.jpg";
import imagebottomcenter from "../assets/tourismpictures/viaducmorlaix.jpg";
import imagebottomright from "../assets/tourismpictures/ilelouetettaureau.jpg";
import imagetopleft from "../assets/tourismpictures/montarre.jpg";
import imagetoprigth from "../assets/tourismpictures/montarreelac.jpg";

const TourismSlider = () => {
	const { t } = useTranslation();
    
	return (
		<div className='TourismSlider'>
			<Row className="row1">
				<Col xs={12} md={4}></Col>
				<Col xs={12} md={4}>
					<img
						src={imagetopleft}
						className="shadow-1-strong rounded imagetopleft"
						alt="mont d'arrée, roc'h Trévelez"
					/>
				</Col>
				<Col xs={12} md={4}>
					<img
						src={imagetoprigth}
						className="shadow-1-strong rounded imagetopright"
						alt="mont d'arrée, le lac de Brennilis et le mont saint Michel de Braspart"
					/>
				</Col>
			</Row>
			<Row className="row2">
				<Col xs={12} lg={4} md={4} mb={4} mb-lg={0}>
					<img
						src={imageleft}
						className="w-100 shadow-1-strong rounded mb-4 imageleft"
						alt="rue ange de Guernisac à Morlaix, maison à colombage."
					/>
				</Col>
				<Col xs={12} lg={8} mb={8} mb-lg={0} className="paragraph3">
					<p className="responsiveparagraph3">
						{t("paragraph3a")}
					</p>
					<p className="responsiveparagraph3">
						{t("paragraph3b")}
					</p>
					<p className="responsiveparagraph3">
						{t("paragraph3c")}
					</p>
					<Button className="custombutton3 btn-lg my-3 responsivebutton">
						<a className="customlink3" href="http://www.baiedemorlaix.bzh/fr/">
							{t("tourismlink")}
						</a>
					</Button>
				</Col>
			</Row>
			<Row className="row3">
				<Col xs={12} lg={4} mb={4} mb-lg={0}>
					<img
						src={imagebottomleft}
						className="w-100 shadow-1-strong rounded mb-4 imagebottomleft"
						alt="Voiliers devant le chateau du Taureau dans la baie de Morlaix."
					/>
				</Col>
				<Col xs={12} lg={4} mb={4} mb-lg={0}>
					<img
						src={imagebottomcenter}
						className="w-100 shadow-1-strong rounded mb-4 imagebottomcenter"
						alt="le viaduc dans le centre ville de Morlaix."
					/>
				</Col>
				<Col xs={12} lg={4} mb={4} mb-lg={0}>
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