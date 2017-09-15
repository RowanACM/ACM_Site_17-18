import React, {Component} from 'react';

class EboardPage extends Component {
	render () {
		return (
			<div>
				<h4 style={{"textAlign": "center"}}>Eboard</h4>

				<div className="demo-card-square mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title mdl-card--expand">
				    <h2 className="mdl-card__title-text">President</h2>
				  </div>
				  <div className="mdl-card__supporting-text">
				    In charge of coordinating all meetings and Rowan ACM activities. He's the head honcho!
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
				    <span className="mdl-chip mdl-chip--contact">
					    <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">T</span>
					    <span className="mdl-chip__text">Paul Turner</span>
					</span>
				  </div>
				</div>

				<div className="demo-card-square mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title mdl-card--expand">
				    <h2 className="mdl-card__title-text">Treasurer</h2>
				  </div>
				  <div className="mdl-card__supporting-text">
				    Money, money, money! You need it to operate. You know the drill. 
				    Handles our budget allocated from the SGA and makes sure we are maximizing every penny for 
				    the advancement of computer science!
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
				    <span className="mdl-chip mdl-chip--contact">
					    <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">G</span>
					    <span className="mdl-chip__text">Trevor Gayden</span>
					</span>
				  </div>
				</div>

				<div className="demo-card-square mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title mdl-card--expand">
				    <h2 className="mdl-card__title-text">Vice-President</h2>
				  </div>
				  <div className="mdl-card__supporting-text">
				    Our committees and development teams are key to attracting new members to ACM, 
				    and to provide a direct way for our members to gain development experience and learn
				    about new technologies! THIS guy is in charge of all that!
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
				    <span className="mdl-chip mdl-chip--contact">
					    <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">T</span>
					    <span className="mdl-chip__text">Tyler Carberry</span>
					</span>
				  </div>
				</div>

				<div className="demo-card-square mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title mdl-card--expand">
				    <h2 className="mdl-card__title-text">Senator</h2>
				  </div>
				  <div className="mdl-card__supporting-text">
				    Someone has to be a representative! Our senator is our voice at SGA meetings, and 
				    helps make sure we are meeting many important guidelines for being a student chartered organization 
				    here at Rowan!
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
				    <span className="mdl-chip mdl-chip--contact">
					    <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">B</span>
					    <span className="mdl-chip__text">Paul Bayruns</span>
					</span>
				  </div>
				</div>

				<div className="demo-card-square mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title mdl-card--expand">
				    <h2 className="mdl-card__title-text">Secretary</h2>
				  </div>
				  <div className="mdl-card__supporting-text">
				    As computer scientists, we deal with a TON of information. And as a club? 
				    We need to keep track of members, meeting attendance, contacts, and events, as well as
				    respond to inquiries, notify members of upcoming deadlines and meeting happenings, and keep minutes!
				    The organization master is our Secretary!
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
				    <span className="mdl-chip mdl-chip--contact">
					    <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">J</span>
					    <span className="mdl-chip__text">Jatin Bhakta</span>
					</span>
				  </div>
				</div>
			</div>
		);
	}
}

export default EboardPage;