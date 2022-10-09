import style from './MainSection.module.css'
import {Link} from "react-router-dom";

export const MainSection = () => {
	return (
		<section className={style.section}>
			<h1 className={style.title}>
				Корпоративный портал для коллекционирования NFT
			</h1>
			<p className={style.text}>
				Не знаете, как использовать NFT? <br/>А что если NFT будет с вашим любимым персонажем кино или литературы? Да
				чего угодно! MORE.Tech NFT легко позволит собирать, дарить, обменивать уникальные NFT, объединяться в
				сообщество единомышленников и соревноваться с коллегами!<br/> Зарегистрируйтесь и получите уже сейчас свой
				первый NFT!
			</p>
			<Link to={'/sign-up'} className="btn_filled">Зарегистрироваться</Link>
		</section>
	)
}
