import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import room1 from "../assets/housepictures/room1.jpg";
import room2 from "../assets/housepictures/room2.jpg";
import room3 from "../assets/housepictures/room3.jpg";
import room4 from "../assets/housepictures/room4.jpg";
import room5 from "../assets/housepictures/room5.jpg";
import living from "../assets/housepictures/living.jpg";
import house from "../assets/housepictures/house.jpg";
import bathroom from "../assets/housepictures/bathroom.jpg";
import kitchen from "../assets/housepictures/kitchen.jpg";
import garden1 from "../assets/housepictures/garden1.jpg";
import garden2 from "../assets/housepictures/garden2.jpg";

const RoomsSlider = () => {
    
	return (
		<div className='RoomsSlider'>
			<Carousel>
				<div>
					<img src={house} alt="exterieur de la maison"/>
				</div>
				<div>
					<img src={garden1} alt="exterieur vers le jardin"/>
				</div>
				<div>
					<img src={garden2} alt="dans le jardin"/>
				</div>
				<div>
					<img src={living} alt="le salon de la maison"/>
				</div>
				<div>
					<img src={kitchen} alt="la cuisine"/>
				</div>
				<div>
					<img src={room1} alt="première chambre"/>
				</div>
				<div>
					<img src={room2} alt="seconde chambre"/>
				</div>
				<div>
					<img src={room3} alt="troisième chambre"/>
				</div>
				<div>
					<img src={room4} alt="quatrième chambre"/>
				</div>
				<div>
					<img src={room5} alt="cinquième chambre"/>
				</div>
				<div>
					<img src={bathroom} alt="salle de bain"/>
				</div>
			</Carousel>
		</div>
	)
}
    
export default RoomsSlider