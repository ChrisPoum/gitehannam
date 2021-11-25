import { Helmet } from "react-helmet-async";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import image2 from "../assets/image2.jpg";
import { FaAirbnb, FaBook, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { Suspense } from 'react';

const Home = () => {
	const { t } = useTranslation();
	const TestimonySlider = React.lazy(() => import("components/TestimonySlider"));
	const RoomsSlider = React.lazy(() => import("components/RoomsSlider"));
	const TourismSlider = React.lazy(() => import("components/TourismSlider"));
    
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
				<meta http-equiv="Content-Security-Policy" 
							content="default-src 'none'; 
											script-src 'self' 'unsafe-inline'; 
											style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; 
											font-src 'self' https://fonts.gstatic.com;
											img-src * data: https:; 
											frame-src *; 
											base-uri 'self';" 
				/>	
			</Helmet>
			<div className="mainbody">
				<h1 className="logotext">Breton Breaks</h1>
				<div className="description">
					<Row className="m-auto d-flex align-items-center">
						<Col sm={12} md={6}>
							<h2 className="subtitle">{t("welcome")}</h2>
							<p className="paragraph1">
								{t("paragraph1")}
							</p>
						</Col>
						<Col sm={12} md={6}>
							<Container className="fluid d-inline-flex notescontainer">
								<div>
									<img
										className="image2"  
										src={image2} 
										alt="vue du jardin derrière la maison"
									/>
								</div>
								<div>
									<div className="notes d-flex align-items-center justify-content-center">
										<div>
											<p className="text-center">
												<FaStar size={20}/>
												<FaStar size={20}/>
												<FaStar size={20}/>
												<FaStar size={20}/>
												<FaStar size={20}/>
											</p>
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
													4,97/5
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
													9,7/10
												</span> 
											</p>
										</div>
									</div>
								</div>
							</Container>
						</Col>
					</Row>
				</div>
				<div className="testimonies">
					<Row >
						<Col sm={12} md={12} className="d-flex align-items-center">
							<Suspense fallback={<div>Chargement...</div>}>
								<TestimonySlider/>
							</Suspense>
						</Col>
					</Row>
				</div>
				<div className="rooms">
					<h2 className="subtitle mb-4">
						{t("rooms")}
					</h2>
					<div className="d-inline-flex roomcontainer">
						<div className="slider mx-0">
							<Suspense fallback={<div>Chargement...</div>}>
								<RoomsSlider />
							</Suspense>
						</div>
						<div className="paragraph2 mx-0">
							<p className="insideparagraph2">
								{t("paragraph2")}
							</p>
							<p className="text-center">
								<Button className="buttoncustom2 btn-lg">
									<Link className="customlink2" to="/booking">
										{t("booking")}
									</Link>
								</Button>
							</p>
						</div>
					</div>
				</div>	
				<div className="tourism">
					<h2 className="subtitle text-center">
						{t("tourism")}
					</h2>
					<Suspense fallback={<div>Chargement...</div>}>
						<TourismSlider />
					</Suspense>
				</div>
			</div>
		</section>
	);
};
    
export default Home;