import React, { Component } from 'react';
import firebase from './firebase.js';

function Post (props) {
  const snapshot = props.snapshot;
  var d = new Date(Number(snapshot.timestamp) * 1000);
  return ( 
    <li className="mdl-list__item mdl-list__item--three-line" href={"#announcement_" + props.announcementKey}>
      <span className="mdl-list__item-primary-content">
        <span>{snapshot.title}</span>
        <span className="mdl-list__item-sub-title">{snapshot.subj}</span>
        <span className="mdl-list__item-text-body">{snapshot.text}</span>     
      </span>
    </li>
  );
}

class Announcements extends Component {

  constructor(props) {
    super(props);
    this.state = {announcements: []};
  }

  componentDidMount() {
    const self = this;
    //Reference for events page, no limit
    var announcementsRef_all = firebase.database().ref("announcements").orderByChild("timestamp");
    //Refernce for home page, limit to 5
    var announcementsRef_5 = announcementsRef_all.limitToLast(5);

    announcementsRef_5.once('value').then(function(snapshot) {
      self.setState({announcements: snapshot});
    });
  }

  componentWillUnmount() {

  }

  render() {

    var renderedAnnouncements = []
    this.state.announcements.forEach(function(childSnapshot) {
      renderedAnnouncements.push(<Post key={childSnapshot.key} announcementKey={childSnapshot.key} snapshot={childSnapshot.val()} />);
    });

    return (
      <div>
        <div className="mdl-layout-title">
          Announcements
        </div>
        <ul className="mdl-list">
          {renderedAnnouncements}
        </ul>
      </div>
    );
  }
}

export default Announcements;