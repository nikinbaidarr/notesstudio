import React from 'react';

class Ideas extends React.Component {
    
    render() {
        return (
            <React.Fragment>
            <h1 className="main_heading">Project Ideas</h1>  
            <hr/>

            <h2>Current small tasks</h2>
            <ul>
            <li>Fix typos and formatting errors on the wiki. </li>
            <li>Write content for Blog. Maybe start with a bunch of essays.</li>
            <li>A dark theme.</li>
            </ul>

            <h2>Current major tasks</h2>
            <ul>
            <li>Write a backend (preferably in go) to connect this site to a database.</li>
            </ul>

            <h2>Hardware projects</h2>

            <p>The listed ideas generally require a basic knowledge of C and/or Python and may also require experinece with UNIX-like operating systems. The difficulty may range from medium to high.</p>
            </React.Fragment>
        );
    }
}

export default Ideas;
