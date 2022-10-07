import styles from './TopUsers.module.css'
import {TopUserCard} from "../../../../components/TopUserCard/TopUserCard";

export const TopUsers = () => {

	const users = [
		{
			name: "Ясос Биба",
			lvl: 10
		},
		{
			name: "Ясос Биба",
			lvl: 10
		},
		{
			name: "Ясос Биба",
			lvl: 10
		},
		{
			name: "Ясос Биба",
			lvl: 10
		},
		{
			name: "Ясос Биба",
			lvl: 10
		},
		{
			name: "Ясос Биба",
			lvl: 10
		},
	]

	return (
		<section className={styles.section}>
			<h2 className="section__title">
				Топ пользователей
			</h2>
			<div className={styles.usersContainer}>
				<div className={styles.usersColumn}>
					{
						users.map((user, index) => {
							return <TopUserCard position={index + 1} name={user.name} lvl={user.lvl}/>
						})
					}
				</div>
			</div>
		</section>
	)
}
