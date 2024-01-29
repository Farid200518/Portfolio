import React from 'react'
import getImageUrl from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.leftSide}>
                <h1>Contact</h1>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.rightSide}>
                <li>
                    <img src={getImageUrl('emailIcon.png')} />
                    <a href=''>myemail@email.com</a>
                </li>
                <li>
                    <img src={getImageUrl('linkedinIcon.png')} />
                    <a href=''>linkedin.com/myname</a>
                </li>
                <li>
                    <img src={getImageUrl('githubIcon.png')} />
                    <a href=''>github.com/myname</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact
