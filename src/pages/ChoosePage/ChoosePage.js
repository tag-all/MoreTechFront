import {Box, Flex, chakra, Text, Button} from "@chakra-ui/react"
import {Layout} from "../../components/Layout/Layout";
import styles from "../MainPage/sections/TopCommunitiesSection/TopCommunitiesSection.module.css";
import droid from "../../assets/img/droid.png";
import veiderTop from "../../assets/img/veider2.png";
import yoda from "../../assets/img/yoda.png";
import veider from "../../assets/img/veider.png";

export const ChoosePage = () => {
    let images = {}

    fetch('http://192.168.0.108/api/v1/clan/nft/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            images = data
        })
    return (
        <Layout>
            <Box color={'white'} m={'auto'} w={'100%'} h={'100%'}>
                <Text as={'h1'} fontSize={'24px'} w={'100%'} align={'center'} fontWeigth={'700'}>
                    Выберете свой первый NFT
                </Text>
                <Box mt={'50px'}>
                    <div className={styles.communities}
                         onClick={(event) => {
                             let target = event.target

                         }}
                    >
                        <div className={`${styles.communitiesItem} ${styles.animate}`}>
                            <img src={droid} alt="" className={styles.nft}/>
                            <p className={styles.communitiesItemTitle}>Cars</p>
                        </div>
                        <div className={`${styles.communitiesItem} ${styles.animate}`}>
                            <img src={veiderTop} alt="" className={styles.nft}/>
                            <p className={styles.communitiesItemTitle}>Lord of the Rings</p>
                        </div>
                        <div className={`${styles.communitiesItem} ${styles.animate}`}>
                            <img src={yoda} alt="" className={styles.nft}/>
                            <p className={styles.communitiesItemTitle}>Science fiction</p>
                        </div>
                        <div className={`${styles.communitiesItem} ${styles.animate}`}>
                            <img src={veider} alt="" className={styles.nft}/>
                            <p className={styles.communitiesItemTitle}>Star Wars</p>
                        </div>
                    </div>
                </Box>
                <Flex justify={'center'} w={'100%'}>
                    <Button color={'white'} border={'1px solid #4789EB'} bg={'#4789EB'} mt={'100px'} w={'315px'}
                            h={'38px'} borderRadius={'4px'}>
                        Подтвердить выбор
                    </Button>
                </Flex>
            </Box>
        </Layout>
    )
}