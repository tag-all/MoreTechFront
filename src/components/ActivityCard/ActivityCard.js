import styles from './ActivityCard.module.css'

export const ActivityCard = ({ title, description, date, img }) => {
	return (
		<div className={styles.card}>
			<img src={img} alt={title} className={styles.img}/>
			<div className={styles.column}>
				<p className={styles.title}>{title}</p>
				<p className={styles.description}>{description}</p>
			</div>
			<p className={styles.date}>{date}</p>
		</div>
	)
}
