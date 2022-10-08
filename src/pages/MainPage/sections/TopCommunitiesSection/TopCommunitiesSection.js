import styles from './TopCommunitiesSection.module.css'
import nft1 from '../../../../assets/img/nftCar.png'
import nft2 from '../../../../assets/img/nftLR.png'
import nft3 from '../../../../assets/img/nftSF.png'
import nft4 from '../../../../assets/img/nftSW.png'

export const TopCommunitiesSection = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Самые популярные сообщества</h2>
			<div className={styles.communities}>
				<div className={styles.communitiesItem}>
					<img src={nft1} alt="" className={styles.nft}/>
					<p className={styles.communitiesItemTitle}>Cars</p>
					<p className={styles.communitiesItemSize}>155 Пользователей</p>
				</div>
				<div className={styles.communitiesItem}>
					<img src={nft2} alt="" className={styles.nft}/>
					<p className={styles.communitiesItemTitle}>Lord of the Rings</p>
					<p className={styles.communitiesItemSize}>45 Пользователей</p>
				</div>
				<div className={styles.communitiesItem}>
					<img src={nft3} alt="" className={styles.nft}/>
					<p className={styles.communitiesItemTitle}>Science fiction</p>
					<p className={styles.communitiesItemSize}>15 Пользователей</p>
				</div>
				<div className={styles.communitiesItem}>
					<img src={nft4} alt="" className={styles.nft}/>
					<p className={styles.communitiesItemTitle}>Star Wars</p>
					<p className={styles.communitiesItemSize}>13 Пользователей</p>
				</div>
			</div>
		</section>
	)
}
