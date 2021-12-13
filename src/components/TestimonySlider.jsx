import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { FaAirbnb, FaBook } from 'react-icons/fa';

const TestimonySlider = () => {
	
	return (
		<Carousel fade>
			<Carousel.Item>
				<Card className="text-center">
					<Card.Body>
						<Card.Title>
							Leslie, 
							<span className="dates mx-2">
								Juillet 2021
							</span>
						</Card.Title>
						<Card.Text>
							"Une grande maison familiale très bien équipée, avec une hygiène irréprochable.
							Christopher et sa femme sont disponibles et vraiment très accueillants et gentils.
							Je recommande sans hésiter et nous gardons d’ailleurs en mémoire l’adresse afin de se réorganiser une week end familial en Bretagne !
							Merci pour tout."
						</Card.Text>
						<Card.Subtitle className="mb-2 text-muted">
							<a 
								className="iconstestimonies"
								href="https://www.airbnb.fr/rooms/32776476?adults=1&check_in=2021-11-18&check_out=2021-11-25&translate_ugc=false&federated_search_id=cc5d8057-3968-4899-8a9e-8870c128211a&source_impression_id=p3_1632923532_LPaxysa6RBVuPhaJ&guests=1"
							>
								<FaAirbnb
									className="mx-2"
									size={30} 
									alt="icone airbnb"
								/>
								airbnb
							</a>
						</Card.Subtitle>
					</Card.Body>
				</Card>
			</Carousel.Item>
			<Carousel.Item>
				<Card className="text-center">
					<Card.Body>
						<Card.Title>
							Joséphine, 
							<span className="dates mx-2">
								Août 2021
							</span>
						</Card.Title>
						<Card.Text>
							"Nous avons passé des superbes vacances, la maison est tres grande, les chambres tres spacieuses et les lits tres confortables et propres."
						</Card.Text>
						<Card.Subtitle className="mb-2 text-muted">
							<a 
								className="iconstestimonies"
								href="https://www.airbnb.fr/rooms/32776476?adults=1&check_in=2021-11-18&check_out=2021-11-25&translate_ugc=false&federated_search_id=cc5d8057-3968-4899-8a9e-8870c128211a&source_impression_id=p3_1632923532_LPaxysa6RBVuPhaJ&guests=1"
							>
								<FaAirbnb
									className="mx-2"
									size={30} 
									alt="icone airbnb"
								/>
								airbnb
							</a>
						</Card.Subtitle>
					</Card.Body>
				</Card>
			</Carousel.Item>
			<Carousel.Item>
				<Card className="text-center">
					<Card.Body>
						<Card.Title>
							Frederic
							<span className="dates mx-2">
								Août 2020
							</span>
						</Card.Title>
						<Card.Text>
							"Great hosts, very flexible with arrival time and process, large bright house with great garden and all necessary equipment."
						</Card.Text>
						<Card.Subtitle className="mb-2 text-muted">
							<a
								className="iconstestimonies" 
								href="https://www.booking.com/hotel/fr/maison-spacieuse-entre-la-ville-et-la-cote.fr.html?aid=356980;label=gog235jc-1DCAYoTUIIYnJldGFnbmVIDVgDaE2IAQGYAQ24ARnIAQ_YAQPoAQH4AQKIAgGoAgO4AvLh0YoGwAIB0gIkODg4NGU0ZTgtMTQ5MC00ZDJmLWFiMGEtM2EzMGNjYjgyNzBi2AIE4AIB;sid=1048d2d31fe8eb604eefb630d2084fba;dest_id=-1467113;dest_type=city;dist=0;group_adults=8;group_children=0;hapos=4;hpos=4;no_rooms=8;req_adults=8;req_children=0;room1=A;room2=A;room3=A;room4=A;room5=A;room6=A;room7=A;room8=A;sb_price_type=total;sr_order=popularity;srepoch=1632924026;srpvid=10d8627df6ae0145;type=total;ucfs=1&#hotelTmpl"
							>
								<FaBook 
									className="mx-2"
									size={30}
									alt="icone représentant booking.com"
								/>
								booking
							</a>
						</Card.Subtitle>
					</Card.Body>
				</Card>
			</Carousel.Item>
		</Carousel>	
	);
};
	
export default TestimonySlider;