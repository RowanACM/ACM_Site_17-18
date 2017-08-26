import React, {Component} from 'react';
import dragonImage from '../img/dragon.jpg';
import meetingImage from '../img/meeting.jpg';
import BubbleLink from './bubbleLink.js';

class NewsDisplay extends Component {
	render () {
		return (
			<div className="ru-acm-main-page-display">
				<div className="ru-acm-box ru-acm-box-margin ru-acm-box-fill ru-acm-box-selectable ru-acm-box-big">
		          <img className="ru-acm-box-image" src={meetingImage}/>
		          <BubbleLink message="Fall Meetings Start Sept. 15th" note="The best time to join is now :)" />
		        </div>
		        <div className="ru-acm-box ru-acm-box-margin ru-acm-box-big ru-acm-box-container">
		          <div className="ru-acm-box ru-acm-box-fill ru-acm-box-selectable ru-acm-box-small">
		            <BubbleLink route="/committees" message="This year's committees" note="We have four sub-committees that specialize in different aspects of computer science. Interested?" />
		          </div>
		          <div className="ru-acm-box ru-acm-box-fill ru-acm-box-selectable ru-acm-box-small">
		            <BubbleLink route="/eboard" message="Fall 2017 Eboard" note="See our new executive board members here!" />
		          </div>
		        </div>
		        <div className="ru-acm-box ru-acm-box-margin ru-acm-box-big ru-acm-box-container">
		          <div className="ru-acm-box ru-acm-box-fill ru-acm-box-selectable ru-acm-box-small">
		            <BubbleLink message="Upcoming Events" note="Meetings, Hackathons, Service Events, and Fun Trips. We have it all!" />
		          </div>
		          <div className="ru-acm-box ru-acm-box-fill ru-acm-box-selectable ru-acm-box-small">
		            <BubbleLink message="MLH Local Hack Day Results" note="Which teams rose above the fun to create something truly spectacular? See our winners here!" />
		          </div>
		        </div>
		        <div className="ru-acm-box ru-acm-box-margin ru-acm-box-selectable ru-acm-box-fill ru-acm-box-big"> 
		          <img className="ru-acm-box-image" src={dragonImage}/>
		          <BubbleLink message="Free Dragon Model" note="Our game dev team has released an open source 3D dragon model for video game designers to use in their projects." />
		        </div>
		    </div>
		);
	}
}
export default NewsDisplay;