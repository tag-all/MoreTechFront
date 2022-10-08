import React from 'react';
import styles from './Search.module.css';
import {SearchIcon} from "../../assets/svg/SearchIcon";
import {Box} from "@chakra-ui/react"

export const Search = ({placeholder}) => {
    return (
        <Box className={styles.search}>
            <SearchIcon/>
            <input className={styles.input} placeholder={placeholder}/>
        </Box>
    )
}
