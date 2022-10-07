import styles from './EventCard.module.css'

export const EventCard = ({ title, description, date, rewards = [], available = true }) => {
	return (
		<div className={styles.card}>
			<div className={styles.column}>
				<p className={styles.title}>{title}</p>
				<p className={styles.text}>{description}</p>
				<p className={styles.date}>{date}</p>
			</div>
			<div className={styles.column}>
				<p className={styles.title}>Награды за участие:</p>
				{
					rewards.map((reward, index) => {
						return <p className={styles.reward} key={index}>{reward}</p>
					})
				}
				<button className="btn_filled">
					Записаться
				</button>
			</div>
		</div>
	)
}
