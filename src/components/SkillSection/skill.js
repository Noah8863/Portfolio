import React from 'react';
import './skill.scss'
import FrontEnd from '../../SVG/front-end.png'
import BackEnd from '../../SVG/ux-design.png'
import Tools from '../../SVG/management-service.png'

function Skills() {
    return (
        <div className="skillSection">
            <section>
                {/* <div id="skillHeader">
                    <h1>My Skills</h1>
                    
                </div>
                <div id="skillContainer">
                    <div className="skills">
                        <img className="svg" src={FrontEnd} alt={FrontEnd} />
                        <h4>Front-End Development</h4>
                        <p>Web Design tools such as HTML, CSS,SCSS, Javascript and React.js</p>
                    </div>
                    <div className="skills">
                        <img className="svg" src={BackEnd} alt={BackEnd} />
                        <h4>Back-End Development</h4>
                        <p>Server side tools such as Express, Node.js, MongoDB, SQL, NoSQL and OOP </p>
                    </div>
                    <div className="skills">
                        <img className="svg" src={Tools} alt={Tools} />
                        <h4>Web Dev Tools</h4>
                        <p>Git, GitBash, GitHub and VS Code </p>
                    </div>   
                    
                </div> */}
            </section>
        </div>
    )
}

export default Skills;