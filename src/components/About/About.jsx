import React from 'react'
import getImageUrl from '../../utils'
import styles from './About.module.css'

const About = () => {
    return (
        <section id='about' className={styles.container}>
            <h2 className={styles.aboutTitle}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageUrl('aboutImage.png')} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img className={styles.icon} src={getImageUrl('cursorIcon.png')} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Frontend Developer</h3>
                            <p className={styles.cardDescription}>I’m a front-end developer with experience
                                in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.icon} src={getImageUrl('serverIcon.png')} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Backend Developer</h3>
                            <p className={styles.cardDescription}>I have experience developing fast and
                                optimised back-end systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.icon} src={getImageUrl('uiIcon.png')} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>UI Designer</h3>
                            <p className={styles.cardDescription}>I have designed multiple landing pages and
                                have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
}

export default About
