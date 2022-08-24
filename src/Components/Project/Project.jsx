import React from 'react';
import ProjectItem from '../Projects/Projects';

function Project(props) {

		return (
			<div className='component project'>
				<h2>Projects go here</h2>
				<ProjectItem />
				<p>likes: {this.state.likes}</p>
				<button onClick={() => this.addLike()}>Like</button>
			</div>
		);
	}


export default Project;
