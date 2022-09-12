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
                    <li>
                        <a href="#projectSection" className="card">
                            <img src={MoovySpace} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    
                                    <img className="card__thumb" src={MoovySpace} alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">MoovySpace</h3>
                                        <span className="card__status">1 hour ago</span>
                                    </div>
                                </div>
                                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" className="card">
                            <img src={CBS} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Colorado Building Solutions</h3>
                                        <span className="card__status">3 hours ago</span>
                                    </div>
                                </div>
                                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" className="card">
                            <img src={Coffee}className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Coffee and Book Finder</h3>
                                        <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>
                                        <span className="card__status">1 hour ago</span>
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
