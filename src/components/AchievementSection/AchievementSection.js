import {AchievementCard} from "../AchievementCard/AchievementCard";
import { SimpleGrid, Flex, extendTheme } from "@chakra-ui/react"


const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}
const theme = extendTheme({ breakpoints })

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
                columns={4}
                spacingX='20px' spacingY='20px'
            >
                {
                    achievement.map((item, index) => {
                        return <AchievementCard
                            key={index}
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