import { Button, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaAirbnb, FaBook, FaTripadvisor } from "react-icons/fa";
import { Link } from "react-router-dom";

const Booking = () => {
	const { t } = useTranslation();
    
	return (
		<section className='Booking text-center'>
			<h2 className="mt-4">
				{t("booking")}
			</h2>
			<Row>
				<Col>
					<p>
						{t("explainbooking")}
					</p>
					<Button className="btn-lg custombutton4">
						<Link 
							className="customlink4"
							to="/contacts"
						>
							{t("contactus")}
						</Link>
					</Button>
				</Col>
			</Row>
			<iframe 
				className="mt-5"
				src="https://calendar.google.com/calendar/embed?src=jeremyquerne%40hotmail.fr&ctz=Europe%2FParis" 
				style={{
					border: 0,
					width: 800, 
					height: 600, 
					frameborder: 0, 
					scrolling: "no"
				}}
				title="calendrier test"
				>
			</iframe>
			<h3 className="mt-3">
				{t("partners")}
			</h3>
			<Row className="mb-3 mt-3">
				<Col md={4}>
					<a href="https://www.airbnb.fr/rooms/32776476?adults=1&check_in=2021-11-18&check_out=2021-11-25&translate_ugc=false&federated_search_id=cc5d8057-3968-4899-8a9e-8870c128211a&source_impression_id=p3_1632923532_LPaxysa6RBVuPhaJ&guests=1">
						<FaAirbnb
							className="iconsbooking"
							size={30} 
						/>
					</a>
				</Col>
				<Col md={4}>
					<a href="https://www.booking.com/hotel/fr/maison-spacieuse-entre-la-ville-et-la-cote.fr.html?aid=356980;label=gog235jc-1DCAYoTUIIYnJldGFnbmVIDVgDaE2IAQGYAQ24ARnIAQ_YAQPoAQH4AQKIAgGoAgO4AvLh0YoGwAIB0gIkODg4NGU0ZTgtMTQ5MC00ZDJmLWFiMGEtM2EzMGNjYjgyNzBi2AIE4AIB;sid=1048d2d31fe8eb604eefb630d2084fba;dest_id=-1467113;dest_type=city;dist=0;group_adults=8;group_children=0;hapos=4;hpos=4;no_rooms=8;req_adults=8;req_children=0;room1=A;room2=A;room3=A;room4=A;room5=A;room6=A;room7=A;room8=A;sb_price_type=total;sr_order=popularity;srepoch=1632924026;srpvid=10d8627df6ae0145;type=total;ucfs=1&#hotelTmpl">
						<FaBook 
								className="iconsbooking"
								size={30}
							/>
					</a>
				</Col>
				<Col md={4}>
					<a href="https://www.tripadvisor.fr/VacationRentalReview-g608763-d16796118-Spacious_home_between_town_and_sea-Morlaix_Finistere_Brittany.html">
						<FaTripadvisor 
							className="iconsbooking"
							size={30}
						/>
					</a>
				</Col>
			</Row>
		</section>
	);
};
    
export default Booking;