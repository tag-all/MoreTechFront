import styles from './ActivitySection.module.css'
import cert from '../../../../assets/img/cert-image.jpg'
import {ActivityCard} from "../../../../components/ActivityCard/ActivityCard";

export const ActivitySection = () => {

	const activity = [
		{
			img: cert,
			title: "NFT-Сертификат получен",
			description: "Получен EgorMit от Zasti",
			date: "17 Сентября 2022 17:55"
		},
		{
			img: cert,
			title: "NFT-Сертификат получен",
			description: "Получен EgorMit от Zasti",
			date: "17 Сентября 2022 17:55"
		},
		{
			img: cert,
			title: "NFT-Сертификат получен",
			description: "Получен EgorMit от Zasti",
			date: "17 Сентября 2022 17:55"
		},
	]

	return (
		<section className={styles.section}>
			<h2 className="section__title">
				Последняя активность
			</h2>
			<div className={styles.activityContainer}>
				{
					activity.map((item, index) => {
						return <ActivityCard
									title={item.title}
									description={item.description}
									date={item.date}
									img={item.img}
								/>
					})
				}
			</div>
		</section>
	)
}
