import {Box, Flex, chakra, Text, Button, SimpleGrid} from "@chakra-ui/react"
import {Layout} from "../../components/Layout/Layout";
import {SearchIcon} from "../../assets/svg/SearchIcon"
import {AchievementCard} from "../../components/AchievementCard/AchievementCard";
import m1 from "../../assets/img/market1.png";
import m2 from "../../assets/img/market2.png";
import m3 from "../../assets/img/market3.png";
import {MarketPlaceCard} from "../../components/MarketPlaceCard/MarketPlaceCard";

export const MarketPlacePage = () => {

    const market = [
        {
            title: "Кружка ВТБ",
            img: m1,
        },
        {
            title: "Welcome-NFT за регистрацию!",
            img: m2
        },
        {
            title: "Запишитесь на мероприятие и получите бонус!",
            img: m3,
        }
    ]


    return (
        <Layout>
            <Box color={'white'} m={'auto'} w={'100%'} h={'100%'}>
                <Text mb={'50px'} as={'h1'} fontSize={'24px'} w={'100%'} align={'center'} fontWeigth={'700'}>
                    Обменяйте NFT-сертификаты на товары в Маркетплейсе
                </Text>
                <Flex p={'5px'} w={'400px'} h={'38px'} alignItems={'center'} borderRadius={'6px'}
                      border={'1px solid white'}>
                    <SearchIcon/>
                    <Text ml={'10px'}>
                        Поиск мероприятий
                    </Text>
                </Flex>
                <Flex as={'section'}>
                    <SimpleGrid
                        mt={'30px'}
                        as={'section'} p={0}
                        columns={4}
                        spacingX='20px' spacingY='20px'
                    >
                        {
                            market.map((item, index) => {
                                return <MarketPlaceCard
                                    key={index}
                                    title={item.title}
                                    img={item.img}
                                />
                            })
                        }
                    </SimpleGrid>
                </Flex>
            </Box>
        </Layout>
    )
}