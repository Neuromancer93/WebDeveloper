import React from 'react';
import { CustomPrevButton, CustomNextButton, CustomPages } from './Navigation';
import PDFViewer from './mgr-pdf-viewer-react';
import WebDeveloperResume1 from './WebDeveloperResume1.pdf';
import './../App.css';

// const Resume = () =>
class Resume extends React.Component {
	state = {
		scale: 0.7
	};

	increaseScale = () => this.setState(({ scale }) => ({ scale: scale + 0.1 }));
	decreaseScale = () => this.setState(({ scale }) => ({ scale: scale - 0.1 }));

	render() {
		return (
			<div>
				<button onClick={this.decreaseScale}>-</button>
				<span> Click "-" or "+" to Change the Size </span>
				<button onClick={this.increaseScale}>+</button>
				<PDFViewer
					document={{
						file: WebDeveloperResume1
					}}
					scale={this.state.scale}
					css="customViewer"
					navigation={{
						elements: {
							previousPageBtn: CustomPrevButton,
							nextPageBtn: CustomNextButton,
							pages: CustomPages
						}
					}}
				/>
			</div>
		);
	}
}

export default () => (
	<div>
		<Resume />
	</div>
);
