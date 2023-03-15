import React from 'react';
import './project.scss'
import MoovySpace from '../../Images/MoovySpace.png';
import CBS from '../../Images/CBS.jpg';
import Coffee from '../../Images/Book-Coffee-Finder.png'

function Projects() {
    return (
        <div className="projectContainer" id="projects">
            <section>
                <h1 id="project-header">Projects</h1>
                <ul className="cards">
                    <li id="project1">
                        <a href="#project1" className="card">
                            <img src={MoovySpace} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <img className="card__thumb" src={MoovySpace} alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">MoovySpace</h3>
                                        <span className="card__tagline">Live Link: <a href="https://moovyspace.herokuapp.com/" target="_blank">MoovySpace</a></span>
                                        <span className="card__status">Completed: August 6th 2022</span>
                                    </div>
                                </div>
                                <p className="card__description">MoovySpace is a full stack application that allows users to find movie details, add movies to their 'Watch Later' or 'Liked Movies' section and view other users profile page</p>
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
                                        <span className="card__tagline">Live Link: <a href="http://coloradobuildingsolutions.com/" target="_blank">Colorado Building Solutions</a></span>
                                        <span className="card__status">Completed: August 22nd 2022</span>
                                    </div>
                                </div>
                                <p className="card__description">Colorado Building Solutions is a front-end eCommerce website that sells lumber and offers roofing service.</p>
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
                                        <span className="card__tagline">Live Link: <a href="https://Noah8863.github.io/Coffee-and-Book-Finder/" target="_blank">Coffee and Book Finder</a></span>
                                        <span className="card__status">Completed: April 9th 2022</span>
                                    </div>
                                </div>
                                <p className="card__description">Coffee and Book Finder is a front-end only application that allows users to find book details and close by coffee shops using varies API's</p>
                            </div>
                        </a>
                    </li>
                    <li id="project4">
                        <a href="#project4" className="card">
                            <img src={MoovySpace} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <img className="card__thumb" src={MoovySpace} alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Project Awesome TBA</h3>
                                        <span className="card__tagline">Lorem ipsum dolord sit amet consectetur</span>
                                        <span className="card__status">Completed: August 6th 2022</span>
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
