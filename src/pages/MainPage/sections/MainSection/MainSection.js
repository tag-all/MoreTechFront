import style from './MainSection.module.css'

export const MainSection = () => {
	return (
		<section className={style.section}>
			<h1 className={style.title}>
				Корпоративный портал для коллекционирования NFT
			</h1>
			<p className={style.text}>
				Не знаете, как использовать NFT? MORE.Tech NFT легко позволит собирать, дарить, обменивать NFT,
				участвуя в мероприятиях и получая подарки за использование!
			</p>
			<button className="btn_filled">Зарегистрироваться</button>
		</section>
	)
}
