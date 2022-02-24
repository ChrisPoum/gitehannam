import { Col, Jumbotron, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaAirbnb, 
				FaBook, 
				FaTripadvisor, 
				FaFacebook, 
				FaInstagram, 
				} from "react-icons/fa";

const DisplayJumbotron = () => {
	const { t } = useTranslation();
    
	return (
		<>
			<Jumbotron className='DisplayJumbotron'>
			</Jumbotron>
			<Row
				className='secondrow'
			>
				<Col
					xs={6} 
					md={4}
					className="d-flex align-items-end"
					>
					<p className="jumboline">
						<span className="jumbolinetext">
							{t("socialnetwork")}
						</span>
						<a href="https://www.facebook.com/people/Breton-Breaks/100075873763924/">
							<FaFacebook
								className="iconsjumbo mx-2"
								size={30}
								alt="icone facebook" 
							/>
						</a>
						<a href="https://www.instagram.com/bretonbreaks/">
							<FaInstagram
								className="iconsjumbo mx-2"
								size={30}
								alt="icone instagram"
							/>
						</a>
						{/* <a href="https://www.youtube.com">
							<FaYoutube 
								className="iconsjumbo mx-2"
								size={30}
								alt="icone youtube"
							/>
						</a> */}
					</p>
				</Col>
				<Col
					xs={6} 
					md={{span:4, offset:4}}
					className="d-flex justify-content-end align-items-end"
					>
					<p className="jumboline lefttext">
						<span className="jumbolinetext"> 
							{t("findus")} 
						</span>
						<a href="https://www.airbnb.fr/rooms/32776476?adults=1&check_in=2021-11-18&check_out=2021-11-25&translate_ugc=false&federated_search_id=cc5d8057-3968-4899-8a9e-8870c128211a&source_impression_id=p3_1632923532_LPaxysa6RBVuPhaJ&guests=1">
							<FaAirbnb
								className="iconsjumbo mx-2"
								size={30}
								alt="icone airbnb" 
							/>
						</a>
						<a href="https://www.booking.com/hotel/fr/maison-spacieuse-entre-la-ville-et-la-cote.fr.html?aid=356980;label=gog235jc-1DCAYoTUIIYnJldGFnbmVIDVgDaE2IAQGYAQ24ARnIAQ_YAQPoAQH4AQKIAgGoAgO4AvLh0YoGwAIB0gIkODg4NGU0ZTgtMTQ5MC00ZDJmLWFiMGEtM2EzMGNjYjgyNzBi2AIE4AIB;sid=1048d2d31fe8eb604eefb630d2084fba;dest_id=-1467113;dest_type=city;dist=0;group_adults=8;group_children=0;hapos=4;hpos=4;no_rooms=8;req_adults=8;req_children=0;room1=A;room2=A;room3=A;room4=A;room5=A;room6=A;room7=A;room8=A;sb_price_type=total;sr_order=popularity;srepoch=1632924026;srpvid=10d8627df6ae0145;type=total;ucfs=1&#hotelTmpl">
							<FaBook 
								className="iconsjumbo mx-2"
								size={30}
								alt="icone représentant booking.com"
							/>
						</a>
						<a href="https://www.tripadvisor.fr/VacationRentalReview-g608763-d16796118-Spacious_home_between_town_and_sea-Morlaix_Finistere_Brittany.html">
							<FaTripadvisor 
								className="iconsjumbo mx-2"
								size={30}
								alt="icone tripsadvisor"
							/>
						</a>
					</p>
				</Col>
			</Row>
		</>
	);
};
    
export default DisplayJumbotron;