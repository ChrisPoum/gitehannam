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
				<title>Breton Breaks - Mentions Légales</title>
			</Helmet>
			<div className="mx-4">
				<h2 className="text-center mt-4 subtitle">
						Mentions Légales
				</h2>
				<h3 className="subtitlecustom">
					<u>Editeurs :</u>
				</h3>
				<p>Christopher Hannam - 15 allée des violettes 29600 Saint-Martin-Des-Champs (siège administratif)</p>
				<h3 className="subtitlecustom">
					<u>Réalisation technique :</u>
				</h3>
				<p>Ce site est géré par 
					<a className="mentionlink" href="https://queje.github.io/"> Jérémy Querné </a>
					pour le compte de Christopher Hannam.
				</p>
				<p>
					Jérémy Querné, 
					<a className="mentionlink" href="/"> Que Je Web </a>
					, 1 chemin de Saint Guénolé, 29660 CARANTEC
				</p>
				<h3 className="subtitlecustom">
					<u>Droits d'auteurs, copyright, liens :</u>
				</h3>
				<p>Le nom de domaine a été obtenu chez <a className="mentionlink" href="https://www.ovh.com">www.ovh.com</a></p>
				<p>le site est hébergé par <a className="mentionlink" href="https://www.vercel.com">www.vercel.com</a></p>
				<h3 className="subtitlecustom">
					<u>Reproduction sur support papier :</u>
				</h3>
				<p>À l’exception de l’iconographie, la reproduction des pages de ce site sur un support papier est autorisée, sous réserve du respect des conditions suivantes :</p>
				<ul>
					<li>gratuité de la diffusion,</li>
					<li>respect de l’intégrité des documents reproduits (aucune modification, ni altération d’aucune sorte)</li>
					<li>citation explicite du site du gite Breton Breaks comme source, et mention que les droits de reproduction sont réservés et strictement limités.</li>
				</ul>
				<h3 className="subtitlecustom">
					<u>Reproduction sur support électronique :</u>
				</h3>
				<p>
					La reproduction de tout ou partie de ce site sur un support électronique est autorisée sous réserve 
					de l’ajout de façon claire et lisible de la source (Breton Breaks) et de la mention « Droits réservés ». 
					Les informations utilisées ne doivent l’être qu’à des fins personnelles, associatives ou professionnelles ; 
					toute utilisation à des fins commerciales ou publicitaires est exclue. Pour des accords publicitaires, veuillez contacter l'éditeur du site.
				</p>
				<h3 className="subtitlecustom">
					<u>Création de lien vers www.bretonbreaks.com :</u>
				</h3>
				<p>
					Le site du gite bretonbreaks autorise la mise en place d’un lien hypertexte pointant vers son contenu, 
					sous réserve de :
				</p>
				<ul>
					<li>ne pas utiliser la technique du lien profond (« deep linking »), 
						c’est-à-dire que les pages du site du gite bretonbreaks ne doivent pas être imbriquées à l’intérieur des pages d’un autre site, 
						mais accessible par l’ouverture d’une fenêtre.
					</li>
					<li>
						mentionner la source qui pointera grâce à un lien hypertexte directement sur le contenu visé.
					</li>
				</ul>
				<p>
					Les informations utilisées ne doivent l’être qu’à des fins personnelles, associatives ou professionnelles ;
					toute utilisation à des fins commerciales ou publicitaires est exclue.
					Cette autorisation ne s’applique pas aux sites internet diffusant des informations à caractère polémique, 
					pornographique, xénophobe ou pouvant, dans une plus large mesure porter atteinte à la sensibilité du plus grand nombre.
					Pour d’autres utilisations, veuillez nous consulter.
				</p>
				<h3 className="subtitlecustom">
					<u>Crédit photos :</u>
				</h3>
				<p>Christopher et Françoise Hannam, et photos libres de droit</p>
				<h3 className="subtitlecustom">
					<u>Cookies, informatique et libertés :</u>
				</h3>
				<p>
					La navigation sur ce site n'utilise aucun cookies et aucune de vos informations personnelles ne sont 
					colléctées ni cédés à des tiers.
				</p>
				<p className="mb-5">
					En parcourant les pages du site, l’internaute reconnaît avoir lu et accepté les limites de responsabilités et les conditions d’utilisation du site. 
					L’internaute accepte les limitations offertes par le réseau Internet dans la consultation des pages du site. 
					Le gite bretonbreaks ne peut être tenu responsable des difficultés de connexion au réseau Internet ou de visualisation des pages du site.
					L’internaute reconnaît, en particulier, être informé des différences d’interprétation des pages Internet par les différents logiciels de navigation présents sur le marché.
				</p>
			</div>
		</section>
	);
};
    
export default MentionsLegales;