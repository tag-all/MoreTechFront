import {Box, Flex, chakra, Text, Button} from "@chakra-ui/react"
import {Layout} from "../../components/Layout/Layout";
import styles from "../MainPage/sections/TopCommunitiesSection/TopCommunitiesSection.module.css";
import {getFirstNFTs, getItem, signToClan} from "../../api/api";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const ChoosePage = () => {
    let url = 'http://192.168.0.108:10880/api/v1/files/'
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const f = async () => {
        let arr = []
        getFirstNFTs().then((images) => {
            for (let i of images) {
                //let inc = 0;
                console.log(i)
                arr.push(i)
                //inc++
            }
            //console.log('данные' + arr)
            setData(arr)
        })
    }

    let k = 0
    useEffect(() => {
        f()
    }, [])

    console.log("data alc,we" + data)

    return (
        <Layout>
            <Box color={'white'} m={'auto'} w={'100%'} h={'100%'}>
                <Text as={'h1'} fontSize={'24px'} w={'100%'} align={'center'} fontWeigth={'700'}>
                    Выберете свой первый NFT <br/>и присоединитесь к сообществу
                </Text>
                <Box mt={'50px'}>
                    <div className={styles.communities}>
                        {
                            data.map((el, index) => {
                                    return (<div className={`${styles.communitiesItem} ${styles.animate}`}
                                                 onClick={() => {
                                                     signToClan(el.id)
                                                     navigate('/profile')
                                                 }}
                                    >
                                        <img src={`${url}${el.start_img}`} alt="" className={styles.nft} key={index}/>
                                        <p className={styles.communitiesItemTitle}>{el.name}</p>
                                    </div>)
                                }
                            )
                        }
                    </div>
                </Box>
                <Flex justify={'center'} w={'100%'}>
                    <Button display={'none'} color={'white'} border={'1px solid #4789EB'} bg={'#4789EB'} mt={'100px'} w={'315px'}
                            h={'38px'} borderRadius={'4px'}>
                        Подтвердить выбор
                    </Button>
                </Flex>
            </Box>
        </Layout>
    )
}