import React from 'react';
import styles from './Search.module.css';
import {SearchIcon} from "../../Assets/svg/SearchIcon";

export const Search = () => {
    return (
        <div className={styles.search}>
            <SearchIcon/>
            <input className={styles.input} placeholder={'Поиск NFT, коллекций и пользователей'}/>
        </div>
    )
}