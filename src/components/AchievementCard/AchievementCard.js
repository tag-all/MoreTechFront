import { Box, Text } from "@chakra-ui/react"
import {Trophy} from "../../assets/svg/Trophy";

export const AchievementCard = ({isAchieved, name, date}) => {

    let bgC
    (isAchieved) ?  bgC='#1A1E23' : bgC='#333941';
    let status
    (date)  ?  status={date} :  status='Не получено'
    return (
        <Box w={'180px'} h={'180px'}
             bg={bgC} borderRadius={'8px'}
             color={'white'}
        >
            <Box m={'52px 52px 0 52px'} w={'180px'}>
                <Trophy/>
            </Box>
            <Text p={'10px 0px 0px 10px'} m={0} fontSize={'14px'} fontWeight={'600'}>{name}</Text>
            <Text p={'2px 0px 0px 10px'} m={0} fontSize={'10px'} fontWeight={'500'}>{status}</Text>
        </Box>
    )
}