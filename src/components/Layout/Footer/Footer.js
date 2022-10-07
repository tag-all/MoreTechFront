import styles from './Footer.module.css';
import {Container} from "../Container/Container";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footerInnerContainer}>
					<div className={styles.left}>
						<h2 className={styles.heading}>Подписка на мероприятия</h2>
						<div className={styles.box}>
							<p className={styles.paragraph}>Ваш e-mail</p>
							<button className={styles.button}>Подписаться</button>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.list}>
							<h2 className={styles.heading}>Другие разделы</h2>
							<p className={styles.paragraph}>Маркетплейс</p>
							<p className={styles.paragraph}>Достижения</p>
							<p className={styles.paragraph}>Мероприятия</p>
						</div>
						<div className={styles.list}>
							<h2 className={styles.heading}>Моя коллекция</h2>
							<p className={styles.paragraph}>Мой профиль</p>
							<p className={styles.paragraph}>Обменять NFT</p>
						</div>
					</div>
				</div>

			</Container>
		</footer>
	)
}
