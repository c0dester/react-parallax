import React from 'react';
import Parallax from '../dist/Parallax';

export default class KitchenSink extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		let style = {
			backgroundColor: '#efefef',
			color: 'white',
			textAlign: 'center'
		};
		let fontStyle = {
			fontFamily: 'Helvetica Neue, Arial, sans-serif',
			textAlign: 'center',
			fontWeight: 100

		};
		return (
			<div style={style}>
				<Parallax bgImage="assets/3.jpg" strength={300} log={true}>
					<br/><br/><br/><br/>
					<h1 style={fontStyle}>first parallax</h1>
					<br/>
					<br/>
					<br/><br/><br/><br/>
					<img src="http://www.fillmurray.com/400/400" alt="fill murray"/>
					<br/>
					<br/>
					<h2 style={fontStyle}>filled with murray</h2>
					<br/>
				</Parallax>
				<div>
					<br/><br/><br/><br/>
					<h1 style={fontStyle}>none-parallax content</h1>
					<br/>
					<h2 style={fontStyle}>-------------</h2>
					<h2 style={fontStyle}>because we can</h2>
					<br/><br/><br/><br/>
				</div>
				<Parallax bgImage="assets/2.jpg" blur={3}>
					<br/><br/><br/><br/>
					<h1 style={fontStyle}>second one</h1>
					<br/>
					<br/>
					<h2 style={fontStyle}>it's also filled</h2>
					<br/><br/>
					<img src="http://www.fillmurray.com/g/500/400" alt="fillmurray"/>
					<br/><br/>
				</Parallax>
				<Parallax bgColor="darkgrey">
					<br/><br/><br/><br/>
					<h1 style={fontStyle}>guess</h1>
					<h1 style={fontStyle}>what?</h1>
					<br/><br/><br/><br/>
				</Parallax>
				<Parallax bgImage="assets/1.jpg">
					<br/><br/><br/><br/>
					<h1 style={fontStyle}>last one...</h1>
					<br/>
					<br/>
					<img src="http://www.fillmurray.com/g/600/500" alt="fillmurray"/>
					<br/><br/><br/><br/>
					
				</Parallax>
			</div>
		);
	}

	
}