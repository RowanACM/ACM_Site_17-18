import React, {Component} from 'react';

class CommitteesPage extends Component {
	render () {
		return (
			<div>
				<h4 style={{"textAlign": "center"}}>Committees</h4>

				<div className="demo-card-square mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title mdl-card--expand">
				    <h2 className="mdl-card__title-text">Animation & Game Development</h2>
				  </div>
				  <div className="mdl-card__supporting-text">
				    Our animation and game development committee is a varied group of programmers who
				    learn and work together to develop video games using programs such as 
				    Blender and the Unity game engine.
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
				    <span className="mdl-chip mdl-chip--contact">
					    <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">D</span>
					    <span className="mdl-chip__text">Nicholas Dondiego</span>
					</span>
				  </div>
				</div>

				<div className="demo-card-square mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title mdl-card--expand">
				    <h2 className="mdl-card__title-text">Robotics</h2>
				  </div>
				  <div className="mdl-card__supporting-text">
				    The Robotics committee is an organization of Rowan students who, similar to the robotics club, 
				    are interested in using motors, sensors, and compute technology to create fun robotic contraptions.
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
				    <span className="mdl-chip mdl-chip--contact">
					    <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">C</span>
					    <span className="mdl-chip__text">Christian Steward</span>
					</span>
				  </div>
				</div>

				<div className="demo-card-square mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title mdl-card--expand">
				    <h2 className="mdl-card__title-text">App Development</h2>
				  </div>
				  <div className="mdl-card__supporting-text">
				    App development is truly an art. Creating responsive interfaces for a 
				    multitude of platforms is tricky enough on web. 
				    Now learn two different development environments for Android and iOS apps.
				    Our team pursues creating a unified Rowan ACM web/app platform, as well as 
				    supporting side projects and startups of its members.
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
				    <span className="mdl-chip mdl-chip--contact">
					    <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">S</span>
					    <span className="mdl-chip__text">Johnathan Saunders</span>
					</span>
				  </div>
				</div>

				<div className="demo-card-square mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title mdl-card--expand">
				    <h2 className="mdl-card__title-text">Web Development</h2>
				  </div>
				  <div className="mdl-card__supporting-text">
				    Currently working on the web application for Rowan ACM's unified platform, the web development committee is 
				    easily our most directly impactful learning environment. Web development surrounds the world, and allows
				    any technology to reach any device.
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
				    <span className="mdl-chip mdl-chip--contact">
					    <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">?</span>
					    <span className="mdl-chip__text">Currently Unfilled</span>
					</span>
				  </div>
				</div>
			</div>
		);
	}
}

export default CommitteesPage;