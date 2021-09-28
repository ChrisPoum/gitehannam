import { useTranslation } from "react-i18next";

const Booking = () => {
	const { t } = useTranslation();
    
	return (
		<section className='Booking'>
			<h2>
				{t("booking")}
			</h2>
		</section>
	);
};
    
export default Booking;