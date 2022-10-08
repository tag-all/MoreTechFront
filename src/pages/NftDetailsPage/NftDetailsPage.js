import styles from './NftDetailsPage.module.css'
import {Layout} from "../../components/Layout/Layout";
import nft from '../../assets/img/nft1.png'

export const NftDetailsPage = () => {

	return (
		<Layout>
			<div className={styles.page}>
				<div className={styles.column}>
					<img src={nft} alt="nft" className={styles.nft}/>
				</div>
				<div className={styles.column}>
					<h1 className={styles.title}>Science fiction #0001</h1>
					<div className={styles.ownerContainer}>
						<p className={styles.text}>Текущий владелец</p>
						<p className={styles.owner}>Андрей Костин</p>
					</div>
					<div className={styles.sellCard}>
						<div className={styles.priceCard}>
							<p className={styles.text}>Текущая цена</p>
							<p className={styles.price}>35 DR</p>
						</div>
						<button className="btn_filled">Продать</button>
						<button className="btn_outlined">Перевести</button>
					</div>
				</div>
			</div>
		</Layout>
	)
}
