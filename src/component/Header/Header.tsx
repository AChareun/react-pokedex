import React from 'react'

import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles['Header']}>
            <h1>PokeDex</h1>
        </header>
    )
}

export default Header
