import React from 'react';
import { Container } from './Container/Container';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
import {Footer} from "./Footer/Footer";

export const Layout = ({
    children,
}) => {
    return (
        <div className={styles.layout}>
            <Header />
            <Container>{children}</Container>
            <Footer />
        </div>
    );
};
