import React, { Component } from 'react';
import firebase from './firebase.js';

function Post (props) {
  const snapshot = props.snapshot;
  console.log(snapshot);
  var d = new Date(Number(snapshot.timestamp) * 1000);
  return ( 
    <a href={"#" + snapshot.key} className="post-preview">
      <h4 className="post-title">{snapshot.title}</h4>
      <p className="post-subtitle">{snapshot.subj}</p>
      <p className="post-text">{snapshot.text}</p>
      <p className="post-meta">Posted in {snapshot.committee} on {d.toDateString()}</p>
    </a>
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
      renderedAnnouncements.push(<Post snapshot={childSnapshot.val()} />);
    });

    return (
      <div id="announcementsBox" className="ru-acm-announcements-box">
        <div className="ru-acm-announcements-header">
          Announcements!
        </div>
        {renderedAnnouncements}
      </div>
    );
  }
}

export default Announcements;