import styles from './OffersSection.module.css'
import {OfferCard} from "../../../../components/OfferCard/OfferCard";
import img1 from '../../../../assets/img/vtbGift.png'
import img2 from '../../../../assets/img/meeting.png'

export const OffersSection = () => {

	const offers = [
		{
			title: "Достигните 10 уровня и получите специальный подарок!",
			img: img1
		},
		{
			title: "Запишитесь на мероприятие и получите свой первый NFT!",
			img: img2
		},
		{
			title: "Еще что-то просто невероятное!",
			img: img2
		}
	]

	return (
		<section className={styles.section}>
			{
				offers.map((offer, index) => {
					return <OfferCard title={offer.title} img={offer.img} key={index}/>
				})
			}
		</section>
	)
}
