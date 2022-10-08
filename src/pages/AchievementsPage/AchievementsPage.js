import {Layout} from "../../components/Layout/Layout";
import { Text, Flex, Box } from "@chakra-ui/react"
import {AchievementSection} from "../../components/AchievementSection/AchievementSection";

export const AchievementsPage = () => {
    return (
        <Layout>
            <Box as={'section'} m={'auto'}>
                <Text fontSize={'28px'} color={'white'} fontWeight={'700'} fontFamily={'Raleway Bold, sans-serif'}>
                    Достижения MORE.Tech
                </Text>
                <AchievementSection/>
            </Box>
        </Layout>
    )
}
