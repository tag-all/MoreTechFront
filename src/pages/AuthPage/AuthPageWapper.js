import styles from './AuthPageWrapper.module.css'
import {Link} from "react-router-dom";

export const AuthPageWrapper = ({ children }) => {
	return (
		<div className={styles.page}>
			<Link to={'/'} className={styles.bg} />
			<div className={styles.formBg}>
				{children}
			</div>
		</div>
	)
}
