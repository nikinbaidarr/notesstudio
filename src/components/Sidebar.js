import React from 'react';
import { NavLink } from "react-router-dom";
import { loadSideBar } from '../dataLoader';
import * as utils from './utils'


class Sidebar extends React.Component {

    constructor(props) { 
        super(props);
        this.headings = loadSideBar();
    }

    handleClick() {
        utils.movetoTop();
        utils.collapseHamburgerMenu();
    }

    render() {
        const chapters = this.headings.map((item) => {
            const elem = {
                id: crypto.randomUUID(),
                label: item.chapter,
                lessons: item.lessons.map((lesson) => {
                    const lessonId = crypto.randomUUID();
                    return (
                        <li key={lessonId}>
                        <NavLink to={lesson.path} style={({ isActive }) => ({
                        textDecoration: isActive ? 'none' : 'none' })}
                        onClick={this.handleClick}>
                        {lesson.title}
                        </NavLink>
                        </li>
                    );
                })
            };
            return (
                <React.Fragment key={elem.id}>
                    <li className="topics">{elem.label}</li>
                    <ul className="subtopics">{elem.lessons}</ul>
                </React.Fragment>
            )
        });
        return(
            <div id="leftsidebar">
                <ul className="headings">{chapters}</ul>
            </div>
        );
    }
}

export default Sidebar;
