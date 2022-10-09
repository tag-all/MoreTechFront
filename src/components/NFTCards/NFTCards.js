import {Box, Flex, chakra, Text} from "@chakra-ui/react"
import {Search} from "../Search/Search";
import styles from "../../pages/MainPage/sections/TopCommunitiesSection/TopCommunitiesSection.module.css";
import droid from "../../assets/img/droid.png";
import veiderTop from "../../assets/img/veider2.png";
import veider from "../../assets/img/veider.png";
import yoda from "../../assets/img/yoda.png";

export const NFTCards = () => {
    return (
        <Box mt={'25px'} p={'30px 50px 30px 50px'} w={'100%'} h={'340px'} bg={'#1A1E23'} borderRadius={'6px'}>
            <Flex justify={'space-between'}>
                <Search placeholder={'Поиск NFT'}/>
                <Box p={'8px 15px 8px 15px'}
                     w={'190px'}
                     borderRadius={'6px'}
                     border={'1px solid white'}
                     fontFamily={'Raleway Bold, sans-serif;'}
                     fontSize={'12px'}
                     color={'#7F7878'}
                >
                    <chakra.span>Сортировать по:    </chakra.span><chakra.span color={'#4789EB'}>Дата</chakra.span>
                </Box>
            </Flex>
            <Text mb={'0px'} color={'white'} fontWeight={'700'} w={'100%'} align={'left'}>Избранные NFT</Text>
            <Box>
                <div className={styles.communities}>
                    <div className={styles.communitiesItem}>
                        <img src={droid} alt="" className={styles.nft}/>
                        <p className={styles.communitiesItemTitle}>Cars</p>
                        <p className={styles.communitiesItemSize}>155 Пользователей</p>
                    </div>
                    <div className={styles.communitiesItem}>
                        <img src={veiderTop} alt="" className={styles.nft}/>
                        <p className={styles.communitiesItemTitle}>Lord of the Rings</p>
                        <p className={styles.communitiesItemSize}>45 Пользователей</p>
                    </div>
                    <div className={styles.communitiesItem}>
                        <img src={yoda} alt="" className={styles.nft}/>
                        <p className={styles.communitiesItemTitle}>Science fiction</p>
                        <p className={styles.communitiesItemSize}>15 Пользователей</p>
                    </div>
                    <div className={styles.communitiesItem}>
                        <img src={veider} alt="" className={styles.nft}/>
                        <p className={styles.communitiesItemTitle}>Star Wars</p>
                        <p className={styles.communitiesItemSize}>13 Пользователей</p>
                    </div>
                </div>
            </Box>
        </Box>
    )
}