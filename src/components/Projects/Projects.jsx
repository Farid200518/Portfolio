import React from 'react'
import projects from '../../data/projects.json'
import getImageUrl from '../../utils'
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <section id='projects' className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.content}>
                {
                    projects.map((project, index) => {
                        return <div className={styles.project} key={index}>
                            <img src={getImageUrl(project.imageSrc)} />
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <ul>
                                {project.skills.map((skill, index) => {
                                    return <li key={index}>{skill}</li>
                                })}
                            </ul>
                            <div className={styles.buttons}>
                                <a href={project.demo}>Demo</a>
                                <a href={project.source}>Source</a>
                            </div>
                        </div>

                    })
                }
            </div>
        </section>
    )
}

export default Projects;
