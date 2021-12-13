import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaAirbnb, FaTripadvisor, FaBook, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
	
	return (
		<section className='Footer'>
			<Container fluid>
				<Row className="footerlogo">
					Breton Breaks
				</Row>
				<Row className="m-auto d-flex align-items-center">
					<Col xs={12} md={4} className="text-center columnfooter responsivehidden">
						<p className="footertitle">
							{t("quicklinks")}
						</p>
						<p>
							<Link className="footerlink" to="/">{t("home")}</Link>
						</p>
						<p>
							<Link className="footerlink" to="/booking">{t("booking")}</Link>
						</p>
						<p>
							<Link className="footerlink" to="/contacts">Contacts</Link>
						</p>
					</Col>
					<Col xs={12} md={4} className="text-center columnfooter responsivedisplayed">
						<p className="footertitle">
							{t("quicklinks")}
						</p>
						<p>
							<Link className="footerlink mx-3" to="/">{t("home")}</Link>
							<Link className="footerlink mx-3" to="/booking">{t("booking")}</Link>
							<Link className="footerlink mx-3" to="/contacts">Contacts</Link>
						</p>
					</Col>
					<Col xs= {12} md={4} className="text-center middlecolfooter columnfooter">
						<p className="footertitle responsivetitle">
							{t("booking")}
						</p>
						<p>
							<a href="mailto:lamaisonblanche@gmail.com" className="footerlink responsivemail">
								{t("email")}
							</a>
						</p>
						<p>
							<a href="tel:0033789029200" className="footerphone responsivephone">
								0789029200
							</a>
						</p>
						<p className="footertitle mt-3 responsivefooter">
							{t("findus")}
						</p>
						<p>
							<a href="https://www.airbnb.fr/rooms/32776476?adults=1&check_in=2021-11-18&check_out=2021-11-25&translate_ugc=false&federated_search_id=cc5d8057-3968-4899-8a9e-8870c128211a&source_impression_id=p3_1632923532_LPaxysa6RBVuPhaJ&guests=1">
								<FaAirbnb
									className="iconsfooter mx-2"
									size={30} 
								/>
							</a>
							<a href="https://www.booking.com/hotel/fr/maison-spacieuse-entre-la-ville-et-la-cote.fr.html?aid=356980;label=gog235jc-1DCAYoTUIIYnJldGFnbmVIDVgDaE2IAQGYAQ24ARnIAQ_YAQPoAQH4AQKIAgGoAgO4AvLh0YoGwAIB0gIkODg4NGU0ZTgtMTQ5MC00ZDJmLWFiMGEtM2EzMGNjYjgyNzBi2AIE4AIB;sid=1048d2d31fe8eb604eefb630d2084fba;dest_id=-1467113;dest_type=city;dist=0;group_adults=8;group_children=0;hapos=4;hpos=4;no_rooms=8;req_adults=8;req_children=0;room1=A;room2=A;room3=A;room4=A;room5=A;room6=A;room7=A;room8=A;sb_price_type=total;sr_order=popularity;srepoch=1632924026;srpvid=10d8627df6ae0145;type=total;ucfs=1&#hotelTmpl">
								<FaBook 
									className="iconsfooter mx-2"
									size={30}
								/>
							</a>
							<a href="https://www.tripadvisor.fr/VacationRentalReview-g608763-d16796118-Spacious_home_between_town_and_sea-Morlaix_Finistere_Brittany.html">
								<FaTripadvisor 
									className="iconsfooter mx-2"
									size={30}
								/>
							</a>
						</p>
					</Col>
					<Col xs={12} md={4} className="text-center responsivehidden">
						<p className="footertitle">
							{t("socialnetwork")}
						</p>
						<p>
							<a href="https://www.facebook.com/people/Breton-Breaks/100075873763924/">
								<FaFacebook
									className="iconsfooter"
									size={30} 
								/>
							</a>
						</p>
						<p>
							<a href="https://www.instagram.com/bretonbreaks/">
								<FaInstagram
									className="iconsfooter"
									size={30}
								/>
							</a>
						</p>
						<p>
							<a href="https://www.youtube.com">
								<FaYoutube 
									className="iconsfooter"
									size={30}
								/>
							</a>
						</p>
					</Col>
					<Col xs={12} md={4} className="text-center responsivedisplayed">
						<p className="footertitle">
							{t("socialnetwork")}
						</p>
						<p>
							<a href="https://www.facebook.com">
								<FaFacebook
									className="iconsfooter mx-2"
									size={30} 
								/>
							</a>
							<a href="https://www.instagram.com">
								<FaInstagram
									className="iconsfooter mx-2"
									size={30}
								/>
							</a>
							<a href="https://www.youtube.com">
								<FaYoutube 
									className="iconsfooter mx-2"
									size={30}
								/>
							</a>
						</p>
					</Col>
				</Row>
				<Row className="footermentions">
					<Link className="footerlink text-center" to="/mentionslegales">
						mentions légales
					</Link>
				</Row>
			</Container>
		</section>
	);
};
    
export default Footer;