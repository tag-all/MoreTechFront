import style from './MainSection.module.css'
import {Link} from "react-router-dom";

export const MainSection = () => {
	return (
		<section className={style.section}>
			<div className={style.main}>
				<h2 className={style.title}>
					УЧАСТВУЙ, СОБИРАЙ, ОБЪЕДИНЯЙСЯ,
					СОРЕВНУЙСЯ
				</h2>
				<h1 className={style.subtitle}>
					Корпоративный портал для коллекционирования NFT
				</h1>
				<Link to={'/sign-up'} className="btn_filled">Зарегистрироваться</Link>
			</div>
			<p className={style.text}>
				Не знаешь, как использовать NFT? <br/>А что если NFT будет с твоим любимым персонажем кино или литературы? Да
				чего угодно! MORE.Tech NFT легко позволит собирать, дарить, обменивать уникальные NFT, объединяться в
				сообщество единомышленников и соревноваться с коллегами!<br/> Зарегистрируйся и получай уже сейчас свой
				первый NFT!
			</p>
			<Link to={'/sign-up'} className="btn_filled">Получить первый NFT</Link>
		</section>
	)
}
