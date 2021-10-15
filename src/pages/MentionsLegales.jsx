import { Helmet } from "react-helmet-async";

const MentionsLegales = () => {
    
	return (
		<section className='MentionsLegales'>
			<Helmet>
				<meta charset="utf-8" />
				<link rel="icon" href="./triskelesmall.png" />
				<link rel="apple-touch-icon" href="./triskelesmall.png" />
				<link rel="manifest" href="./manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content=" mentions légales pour le site breton breaks, 
					15 allée des violettes 29600 Saint-Martin-Des-Champs."
				/>
				<title>Breton Breaks</title>
			</Helmet>
			<h2>Mentions Légales</h2>
		</section>
	);
};
    
export default MentionsLegales;