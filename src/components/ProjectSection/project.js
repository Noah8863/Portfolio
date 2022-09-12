import React from 'react';
import './project.scss'
import MoovySpace from '../../Images/MoovySpace.png';
import CBS from '../../Images/CBS.jpg';
import Coffee from '../../Images/Book-Coffee-Finder.png'

function Projects() {
    return (
        <div className="projectContainer">
            <section id="projectSection">
                <ul className="cards">
                    <li id="project1">
                        <a href="#project1" className="card">
                            <img src={MoovySpace} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <img className="card__thumb" src={MoovySpace} alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">MoovySpace</h3>
                                        <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>
                                        <span className="card__status">Completed: August 6th 2022</span>
                                    </div>
                                </div>
                                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a>
                    </li>
                    <li id="project2">
                        <a href="#project2" className="card">
                            <img src={CBS} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Colorado Building Solutions</h3>
                                        <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>
                                        <span className="card__status">Completed: August 22nd 2022</span>
                                    </div>
                                </div>
                                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a>
                    </li>
                    <li id="project3">
                        <a href="#project3" className="card">
                            <img src={Coffee}className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Coffee and Book Finder</h3>
                                        <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>
                                        <span className="card__status">Completed: April 9th 2022</span>
                                    </div>
                                </div>
                                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Projects;
