import styles from './UsersSection.module.css'
import {UserCard} from "../../../../components/UserCard/UserCard";

export const UsersSection = () => {

	const users = [
		{
			name: "Лена Головач",
			id: 123,
			role: "Пользователь",
			lvl: 1
		},
		{
			name: "Лена Головач",
			id: 123,
			role: "Пользователь",
			lvl: 2
		},
		{
			name: "Лена Головач",
			id: 123,
			role: "Пользователь",
			lvl: 3
		},
	]

	return (
		<section className={styles.section}>
			<h2 className="section__title">
				Пользователи
			</h2>
			<div className={styles.usersContainer}>
				{
					users.map((user, index) => {
						return <UserCard
									name={user.name}
									id={user.id}
									role={user.role}
									lvl={user.lvl}
									key={index}
								/>
					})
				}
			</div>
		</section>
	)
}
