import React from 'react';
import styles from './Search.module.css';
import {SearchIcon} from "../../assets/svg/SearchIcon";

export const Search = () => {
    return (
        <div className={styles.search}>
            <SearchIcon/>
            <input className={styles.input} placeholder={'Поиск NFT, коллекций и пользователей'}/>
        </div>
    )
}
