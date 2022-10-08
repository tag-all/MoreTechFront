import styles from './MainPage.module.css'
import {Layout} from "../../components/Layout/Layout";
import {MainSection} from "./sections/MainSection/MainSection";
import {OffersSection} from "./sections/OffersSection/OffersSection";
import {TopUsers} from "./sections/TopUsers/TopUsers";
import {EventsSection} from "./sections/EventsSection/EventsSection";
import {ActivitySection} from "./sections/ActivitySection/ActivitySection";
import {UsersSection} from "./sections/UsersSection/UsersSection";
import {TopCommunitiesSection} from "./sections/TopCommunitiesSection/TopCommunitiesSection";

export const MainPage = () => {
	return (
		<div className={styles.page}>
			<Layout>
				<MainSection />
				<OffersSection />
				<TopCommunitiesSection />
				<TopUsers />
				<EventsSection />
				<ActivitySection />
				<UsersSection />
			</Layout>
		</div>
	)

}
