import React from 'react'
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import getImageByUrl from '../../utils'
import styles from './Experience.module.css'

const Experience = () => {
    return (
        <section id='experience' className={styles.container} >
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content} >
                <div className={styles.skills} >
                    {
                        skills.map((skill, index) => {
                            return (
                                <div key={index} className={styles.skill}>
                                    <div className={styles.skillImgContainer}>
                                        <img src={getImageByUrl(skill.imageSrc)} alt={skill.title} className={styles.skillImg} />
                                    </div>
                                    <p className={styles.skillTitle}>{skill.title}</p>
                                </div>
                            );

                        })
                    }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, index) => {
                            return <li key={index} className={styles.historyItem} >
                                <img src={getImageByUrl(historyItem.imageSrc)} alt={historyItem.organisation} className={styles.historyImg} />
                                <div className={styles.historyContent}>
                                    <h3 className={styles.historyTitle}>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p className={styles.historyDate}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul className={styles.historyExperiences}>
                                        {historyItem.experiences.map((experience, index) => {
                                            return <li key={index} className={styles.historyExperience} >{experience}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Experience
