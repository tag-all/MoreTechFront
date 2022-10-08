import styles from './AuthPageWrapper.module.css'
import {AuthPageWrapper} from "./AuthPageWapper";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

export const SignUpPage = () => {

	const { register, handleSubmit } = useForm()
	const onSubmit = data => console.log(data)

	return (
		<AuthPageWrapper>
			<div className={styles.content}>
				<h1 className={styles.title}>Регистрация</h1>
				<div className={styles.content}>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

						<div className={styles.inputWrapper}>
							<p className={styles.inputTitle}>E-mail</p>
							<input type="email" {...register("email", { required: true })} className="input"/>
						</div>

						<div className={styles.inputWrapper}>
							<p className={styles.inputTitle}>Имя</p>
							<input {...register("name", { required: true })} className="input"/>
						</div>

						<div className={styles.inputWrapper}>
							<p className={styles.inputTitle}>Фамилия</p>
							<input {...register("secondName", { required: true })} className="input"/>
						</div>

						<div className={styles.inputWrapper}>
							<p className={styles.inputTitle}>Пароль</p>
							<input type="password" {...register("password", { required: true })} className="input"/>
						</div>

						<div className={styles.btnWrapper}>
							<button type="submit" className="btn_filled">Зарегистрироваться</button>
						</div>
					</form>
					<p className={styles.smallText}>Уже зарегистрированы? <span className={styles.link}><Link to={'/sign-in'}>Войти</Link></span></p>
				</div>
			</div>

		</AuthPageWrapper>
	)
}