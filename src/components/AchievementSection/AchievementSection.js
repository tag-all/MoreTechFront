import {AchievementCard} from "../AchievementCard/AchievementCard";
import { SimpleGrid, Flex } from "@chakra-ui/react"

const achievement = [
    {
        name: 'Первая покупка',
        isAchieved: true,
        date: '',
    },
    {
        name: 'Обмен валют',
        isAchieved: true,
        date: '',
    },
    {
        name: 'Регистрация',
        isAchieved: true,
        date: '',
    },
    {
        name: 'Достижение №3',
        isAchieved: false,
        date: '',
    },
    {
        name: 'Достижение №4',
        isAchieved: false,
        date: '',
    },
    {
        name: 'Достижение №5',
        isAchieved: false,
        date: '',
    },
    {
        name: 'Достижение №6',
        isAchieved: false,
        date: '',
    },
    {
        name: 'Достижение №7',
        isAchieved: false,
        date: '',
    },
]

export const AchievementSection = () => {
    return (
        <Flex as={'section'} >
            <SimpleGrid
                as={'section'} p={0}
                columns={[1, 1, 3, 4]}
                spacingX='20px' spacingY='20px'
            >
                {
                    achievement.map((item, index) => {
                        return <AchievementCard
                            isAchieved={item.isAchieved}
                            name={item.name}
                            date={item.date}
                        />
                    })
                }
            </SimpleGrid>
        </Flex>
    )
}