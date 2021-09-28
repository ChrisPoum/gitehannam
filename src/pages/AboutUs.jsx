import { useTranslation } from "react-i18next";

const AboutUs = () => {
	const { t } = useTranslation();

	return (
		<section className='AboutUs'>
			<h2>
				{t("AboutUs")}
			</h2>		
		</section>
	);
};
    
export default AboutUs;