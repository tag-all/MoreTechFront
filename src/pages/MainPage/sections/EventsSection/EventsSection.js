import styles from './EventsSection.module.css'
import {EventCard} from "../../../../components/EventCard/EventCard";

export const EventsSection = () => {

	const events = [
		{
			title: "Мероприятие 1",
			description: "Описание мероприятия, любой текст Подробности, уcловия и вся дополнительная информация",
			date: "17 Сентября 2022 17;55",
			rewards: ["+500 XP", "NFT-Сертификат"]
		},
		{
			title: "Мероприятие 1",
			description: "Описание мероприятия, любой текст Подробности, уcловия и вся дополнительная информация",
			date: "17 Сентября 2022 17;55",
			rewards: ["+500 XP", "NFT-Сертификат"]
		},
	]

	return (
		<section className={styles.section}>
			<h2 className="section__title">
				Ближайшие мероприятия
			</h2>
			<div className={styles.eventsContainer}>
				{
					events.map((event, index) => {
						return <EventCard
							title={event.title}
							description={event.description}
							date={event.date}
							rewards={event.rewards}
							key={index}
						/>
					})
				}
			</div>
		</section>
	)
}
