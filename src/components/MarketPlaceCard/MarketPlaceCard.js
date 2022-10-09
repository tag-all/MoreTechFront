import styles from "../OfferCard/OfferCard.module.css";
import {Box, Flex, chakra, Text, Button, SimpleGrid} from "@chakra-ui/react"

export const MarketPlaceCard = ({ title = "", img = "" }) => {
    return (
        <Box  w={'100%'} maxWidth={'160px'} h={'160px'} bg={'4789EB'}
              position={'relative'} borderRadius={'12px'}
              overflow={'hidden'}
        >
            <img src={img} alt={title} className={styles.img}/>
            <Box position={'absolute'} bottom={0} w={'100%'} p={'12px 12px'} bg={'rgba(0, 0, 0, 0.4)'}>
                <Text fontFamily={'Raleway Regular, sans-serif'} fontStyle={'normal'} fontWeight={'600'}
                      fontSize={'12px'} lineHeight={'23px'} m={'0px'} color={'#FFFFFF'}>
                    {title}
                </Text>
            </Box>
        </Box>
    )
}