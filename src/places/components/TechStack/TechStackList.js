import React from "react";
import './TechStackList.css'

function TechStackList() {
    return <ul className="tech-stack-list">
        <li className="tech-stack-item">
            <h3><em>MongoDb</em></h3>
        </li>
        <li className="tech-stack-item">
            <h3>Express</h3>
        </li>
        <li className="tech-stack-item">
            <h3><em>React</em></h3>
        </li>
        <li className="tech-stack-item">
            <h3>Node</h3>
        </li>
    </ul>
}

export default TechStackList