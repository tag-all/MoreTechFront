import styles from './UserCard.module.css'
import avatar from '../../assets/svg/avatarStub.svg'

export const UserCard = ({ name, id, role, lvl }) => {

	const roles = ["Пользователь", "Руководитель", "Администратор"]
	//todo: select

	return (
		<div className={styles.card}>
			<div className={styles.row}>
				<img src={avatar} alt="avatar" className={styles.avatar}/>
				<p className={styles.name}>{name}</p>
			</div>
			<div className={styles.row}>
				<button className="btn_outlined">Перевод</button>
				<p className={styles.lvl}>{lvl}</p>
			</div>
		</div>
	)
}
