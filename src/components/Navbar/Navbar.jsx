import React from 'react'

import styles from './Navbar.module.css'
import { useState } from 'react'
import getImageUrl from '../../utils'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)


    return <nav className={styles.navbar}>
        <a href="#home" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img
                onClick={() => setMenuOpen(!menuOpen)}
                className={styles.menuBtn}
                src={
                    menuOpen
                        ? getImageUrl('closeIcon.png')
                        : getImageUrl('menuIcon.png')}
            />
            <ul
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar
