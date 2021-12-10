import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import room1 from "../assets/housepictures/room1.webp";
import room2 from "../assets/housepictures/room2.webp";
import room3 from "../assets/housepictures/room3.webp";
import room4 from "../assets/housepictures/room4.webp";
import room5 from "../assets/housepictures/room5.webp";
import living from "../assets/housepictures/living.webp";
import house from "../assets/housepictures/house.webp";
import bathroom1 from "../assets/housepictures/bathroom1.webp";
import kitchen from "../assets/housepictures/kitchen.webp";
import garden1 from "../assets/housepictures/garden1.webp";
import garden2 from "../assets/housepictures/garden2.webp";
import bathroom2 from "../assets/housepictures/bathroom2.webp";

const RoomsSlider = () => {
    
	return (
		<div className='RoomsSlider'>
			<Carousel>
				<div>
					<img width="654" height="491" className="sliderimage" src={house} alt="exterieur de la maison"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={garden1} alt="exterieur vers le jardin"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={garden2} alt="dans le jardin"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={living} alt="le salon de la maison"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={kitchen} alt="la cuisine"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={room1} alt="première chambre"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={room2} alt="seconde chambre"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={room3} alt="troisième chambre"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={room4} alt="quatrième chambre"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={room5} alt="cinquième chambre"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={bathroom1} alt="salle de bain"/>
				</div>
				<div>
					<img width="654" height="491" className="sliderimage" src={bathroom2} alt="deuxième salle de bain"/>
				</div>
			</Carousel>
		</div>
	)
}
    
export default RoomsSlider