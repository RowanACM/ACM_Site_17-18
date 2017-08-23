import React, {Component} from 'react';

function BubbleLink(props) {
	return (
		<a href={props.route} className="bubbleLink">
			<h id={"bubbleLinkMessage" + props.id} data-text={props.message} className={"message speed-" + (Math.floor(1 + Math.random() * 3)).toString()}>{props.message}</h>
			<p className="note" data-text={props.note}>{props.note}</p>
		</a>
	);
}

export default BubbleLink;