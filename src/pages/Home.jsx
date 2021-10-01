import { Helmet } from "react-helmet";
import { Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import image2 from "../assets/image2.jpg";
import { FaAirbnb, FaBook } from "react-icons/fa";
import TestimonySlider from "components/TestimonySlider";
import RoomsSlider from "components/RoomsSlider";
import { Link } from "react-router-dom";
import GridGallery from "components/GridGallery";

const Home = () => {
	const { t } = useTranslation();
    
	return (
		<section className='Home'>
			<Helmet>
				<meta charset="utf-8" />
				<link rel="icon" href="./triskelesmall.png" />
				<link rel="apple-touch-icon" href="./triskelesmall.png" />
				<link rel="manifest" href="./manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Breton Breaks, grande maison avec 10 couchages pour des locations 
					de les vacances dans la baie de Morlaix, 
					15 allée des violettes 29600 Saint-Martin-Des-Champs."
				/>
				<title>Breton Breaks</title>
			</Helmet>
			<div className="mainbody">
				<h1 className="logotext">Breton Breaks</h1>
				<div className="description">
					<Row className="m-auto d-flex align-items-center">
						<Col md={6}>
							<h2>{t("welcome")}</h2>
							<p>{t("paragraph1")}</p>
						</Col>
						<Col md={6}>
							<Row>
								<Col md={6}>
									<img
										className="image2"  
										src={image2} 
										alt="vue du jardin derrière la maison"
									/>
								</Col>
								<Col md={6}>
									<div className="notes d-flex align-items-center justify-content-center">
										<div>
											<p>
												<a 
													className="iconsnotes"
													href="https://www.airbnb.fr/rooms/32776476?adults=1&check_in=2021-11-18&check_out=2021-11-25&translate_ugc=false&federated_search_id=cc5d8057-3968-4899-8a9e-8870c128211a&source_impression_id=p3_1632923532_LPaxysa6RBVuPhaJ&guests=1"
												>
													<FaAirbnb
														className="mx-2"
														size={30} 
													/>
													Airbnb
												</a>  
												<span className="stylenotes mx-2">
													4,97 / 5
												</span>
											</p>
											<p>
												<a 
													className="iconsnotes"
													href="https://www.booking.com/hotel/fr/maison-spacieuse-entre-la-ville-et-la-cote.fr.html?aid=356980;label=gog235jc-1DCAYoTUIIYnJldGFnbmVIDVgDaE2IAQGYAQ24ARnIAQ_YAQPoAQH4AQKIAgGoAgO4AvLh0YoGwAIB0gIkODg4NGU0ZTgtMTQ5MC00ZDJmLWFiMGEtM2EzMGNjYjgyNzBi2AIE4AIB;sid=1048d2d31fe8eb604eefb630d2084fba;dest_id=-1467113;dest_type=city;dist=0;group_adults=8;group_children=0;hapos=4;hpos=4;no_rooms=8;req_adults=8;req_children=0;room1=A;room2=A;room3=A;room4=A;room5=A;room6=A;room7=A;room8=A;sb_price_type=total;sr_order=popularity;srepoch=1632924026;srpvid=10d8627df6ae0145;type=total;ucfs=1&#hotelTmpl"
												>
													<FaBook
														className="mx-2"
														size={30} 
													/>
													Booking
												</a>  
												<span className="stylenotes mx-2">
													9,7 / 10
												</span> 
											</p>
										</div>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				<div className="testimonies">
					<Row >
						<Col md={12} className="d-flex align-items-center">
							<TestimonySlider/>
						</Col>
					</Row>
				</div>
				<div className="rooms">
					<h2>
						{t("rooms")}
					</h2>
					<RoomsSlider />
					<p>
						{t("paragraph2")}
					</p>
					<Button className="buttoncustom">
						<Link className="buttoncustom" to="/booking">
							{t("booking")}
						</Link>
					</Button>
				</div>	
				<div className="tourism">
					<h2>
						{t("tourism")}
					</h2>
					<GridGallery />
					<div className="paragraph3">
						{t("paragraph3")}
					</div>
				</div>
			</div>
		</section>
	);
};
    
export default Home;