import React, {Component} from 'react';
import dragonImage from '../img/dragon.jpg';
import meetingImage from '../img/meeting.jpg';
import BubbleLink from './bubbleLink.js';
import NewsDisplayStyle from '../styles/css/newsDisplay.css';

class NewsDisplay extends Component {
	render () {
		return (
			<div>
				<div className="fall-meetings-image image-card mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title mdl-card--expand"/>
					<div className="mdl-card__actions">
						<span className="image-card__filename">Fall Meetings Start Sept. 15th!</span>
					</div>
				</div>

				<div className="text-link-card mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title mdl-card--expand">
						<h4>
							This year's committees!
						</h4>
					</div>
					<div className="mdl-card__actions mdl-card--border">
						<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="/committees">Committees</a>
						<div className="mdl-layout-spacer"/>
						<i className="material-icons">event</i>
					</div>
				</div>

				<div className="text-link-card mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title mdl-card--expand">
						<h4>
							Congratulations new executive board members!
						</h4>
					</div>
					<div className="mdl-card__actions mdl-card--border">
						<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="/eboard">Eboard</a>
						<div className="mdl-layout-spacer"/>
						<i className="material-icons">event</i>
					</div>
				</div>
		    </div>
		);
	}
}
export default NewsDisplay;