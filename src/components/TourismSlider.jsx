import { Button, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import imageleft from "../assets/tourismpictures/lighthouse.webp";

const TourismSlider = () => {
	const { t } = useTranslation();
    
	return (
		<div className='TourismSlider'>
			<Row className="row2 mx-0">
				<Col xs={12} lg={4} md={4} mb={4} mb-lg={0}>
					<img
						src={imageleft}
						className="w-100 shadow-1-strong rounded mb-4 imageleft"
						alt="rue ange de Guernisac à Morlaix, maison à colombage."
					/>
				</Col>
				<Col xs={12} lg={8} mb={8} mb-lg={0} className="paragraph3 mx-0">
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
		</div>
	);
};
    
export default TourismSlider;