import styles from './TopUserCard.module.css'
import avatar from '../../assets/svg/avatarStub.svg'

export const TopUserCard = ({ position, name, lvl }) => {
	return (
		<div className={styles.card}>
			<p className={styles.position}>{position}</p>
			<img src={avatar} alt="avatar" className={styles.avatar}/>
			<p className={styles.name}>{name}</p>
			<p className={styles.lvl}>{lvl}</p>
		</div>
	)
}
