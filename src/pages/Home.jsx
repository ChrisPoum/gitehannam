import { Helmet } from "react-helmet";
import { Row, Col } from "react-bootstrap";

const Home = () => {
    
	return (
		<section className='Home'>
			<Helmet>
				<meta charset="utf-8" />
				<link rel="icon" href="./triskele.png" />
				<link rel="apple-touch-icon" href="./triskele.png" />
				<link rel="manifest" href="./manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Breton Breaks, grande maison avec 10 couchages pour des locations 
					de les vacances dans la baie de Morlaix, Saint-Martin-Des-Champs."
				/>
				<title>Breton Breaks</title>
			</Helmet>
			<div className="mainbody">
				<h1 className="logotext">Breton Breaks</h1>
				<div className="description">
					<Row inline className="m-auto d-flex align-items-center">
						<Col>
							<h2>yuevfoyuzv</h2>
						</Col>
						<Col></Col>
					</Row>
				</div>
				<div className="activities">
				</div>	
			</div>
		</section>
	);
};
    
export default Home;