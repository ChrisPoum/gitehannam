import { Button, Col, Row, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaAirbnb, FaBook, FaTripadvisor } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import imagehighseason from "assets/bookingcard/greveblanche.jpg";
import imagelowseason from "assets/bookingcard/tempete.jpg";

const Booking = () => {
	const { t } = useTranslation();

	const cardtexts = [
		{
			id:1,
			image: imagehighseason,
			title: t("season1"),
			price: t("price1"),
		},
		{
			id:2,
			image: imagelowseason,
			title: t("season2"),
			price: t("price2"),
		}
	];
    
	return (
		<section className='Booking text-center'>
			<Helmet>
				<meta charset="utf-8" />
				<link rel="icon" href="./triskelesmall.png" />
				<link rel="apple-touch-icon" href="./triskelesmall.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Réserver vos vacances avec Breton Breaks, grande maison avec 10 couchages pour des locations 
					de les vacances dans la baie de Morlaix, 
					15 allée des violettes 29600 Saint-Martin-Des-Champs."
				/>
				<title>Breton Breaks - Booking</title>
			</Helmet>
			<h2 className="mt-4 subtitle">
				{t("booking")}
			</h2>
			<Row>
				<Col>
					<p>
						{t("explainbooking")}
					</p>
					<Row xs={12} md={12} className="d-flex justify-content-center">
						{ cardtexts.map(cardtext => (
							<Col xs={12} md={4} key={ cardtext.id } className="d-flex justify-content-center">
								<Card className="cardbooking">
									<Card.Img 
										variant="top" 
										src= { cardtext.image } 
									/>
									<Card.Body>
										<Card.Title>
											<h3>
												{cardtext.title}
											</h3>
										</Card.Title>
										<Card.Text>
											<span className="price">
												{cardtext.price}
											</span>
											<Button className="btn-lg custombutton4 mt-1 mb-3">
												<Link 
													className="customlink4"
													to="/contacts"
												>
													{t("contactus")}
												</Link>
											</Button>
										</Card.Text>
										<Card.Text className="mt-2">											
											{t("bookingtext")}
										</Card.Text>
										<Card.Text className="mb-1 mt-1">
											<a href="https://www.airbnb.fr/rooms/32776476?adults=1&check_in=2021-11-18&check_out=2021-11-25&translate_ugc=false&federated_search_id=cc5d8057-3968-4899-8a9e-8870c128211a&source_impression_id=p3_1632923532_LPaxysa6RBVuPhaJ&guests=1">
												<FaAirbnb
													className="iconsbooking mx-3"
													size={30} 
												/>
											</a>
											<a href="https://www.booking.com/hotel/fr/maison-spacieuse-entre-la-ville-et-la-cote.fr.html?aid=356980;label=gog235jc-1DCAYoTUIIYnJldGFnbmVIDVgDaE2IAQGYAQ24ARnIAQ_YAQPoAQH4AQKIAgGoAgO4AvLh0YoGwAIB0gIkODg4NGU0ZTgtMTQ5MC00ZDJmLWFiMGEtM2EzMGNjYjgyNzBi2AIE4AIB;sid=1048d2d31fe8eb604eefb630d2084fba;dest_id=-1467113;dest_type=city;dist=0;group_adults=8;group_children=0;hapos=4;hpos=4;no_rooms=8;req_adults=8;req_children=0;room1=A;room2=A;room3=A;room4=A;room5=A;room6=A;room7=A;room8=A;sb_price_type=total;sr_order=popularity;srepoch=1632924026;srpvid=10d8627df6ae0145;type=total;ucfs=1&#hotelTmpl">
												<FaBook 
														className="iconsbooking mx-3"
														size={30}
													/>
											</a>
											<a href="https://www.tripadvisor.fr/VacationRentalReview-g608763-d16796118-Spacious_home_between_town_and_sea-Morlaix_Finistere_Brittany.html">
												<FaTripadvisor 
													className="iconsbooking mx-3"
													size={30}
												/>
											</a>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
			<iframe 
				src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FParis&showTitle=0&showNav=0&showPrint=0&showDate=1&showTabs=1&showCalendars=0&showTz=0&src=amVyZW15cXVlcm5lQGhvdG1haWwuZnI&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043" 
				width="800" 
				height="600"
				scrolling="no"
				title="calendrier des disponiblités"
				alt="les dates disponibles par un calendrier"
				className="calendar mt-5"
			>
			</iframe>
		</section>
	);
};
    
export default Booking;