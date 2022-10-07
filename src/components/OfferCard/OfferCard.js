import styles from './OfferCard.module.css'

export const OfferCard = ({ title = "", img = "" }) => {
	return (
		<div className={styles.card}>
			<img src={img} alt={title} className={styles.img}/>
			<div className={styles.titleWrapper}>
				<p className={styles.title}>{title}</p>
			</div>
		</div>
	)
}
