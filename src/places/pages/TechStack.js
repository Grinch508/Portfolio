import React from "react";
import NavLinks from "../components/NavLink/NavLinks";
import TechStackList from "../components/TechStack/TechStackList";
import './TechStack.css'
function TechStack() {
    return <>
        <nav>
            <NavLinks />
        </nav>

        <main className="tech-stack">
            <TechStackList />
        </main>
    </>
}

export default TechStack