import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';
import { List } from '@material-ui/core';
import { MdCode } from 'react-icons/md';
import { MdLink } from 'react-icons/md';

function TabContainer(props) {
	return <div>{props.children}</div>;
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};

function TabsWrappedLabel() {
	const [ value, setValue ] = React.useState('one');

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<div className="">
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} centered>
					<Tab value="one" label="Actualize Yourself" wrapped />
					<Tab value="two" label="Item Two" />
					<Tab value="three" label="Item Three" />
				</Tabs>
			</AppBar>
			{value === 'one' && (
				<TabContainer>
					<div className="parts" id="Pitem1">
						<h2 align="center">Actualize Yourself - A Different Kind of Task Manager</h2>
						<Grid container direction="row" justify="space-evenly" alignContent="baseline">
							<Grid item xs align="center">
								<SwipeableTextMobileStepper />
							</Grid>
							<Grid item xs>
								<Typography>
									<List>
										<ul>
											<li>
												A website that helps you keep track of your long term goals in order to
												Actualize Yourself.
											</li>
											<li>
												Unlike other task management apps, Actualize Yourself focuses on the
												individual and overall goals, not just the task at hand.
											</li>
											<li>Simply create an account</li>
											<li>
												Fill out your profile, keeping in mind long term goals and the kind of
												person you would like to be
											</li>
											<li>
												Start creating long-term goals/tasks, which dynamicaly generate a
												visualization of a timeline.
											</li>
											<li>Uses: Javascript, SQL, Express.js, Handlebars.js, Node.js</li>
											<li>
												<a
													href="https://actualize-yourself.herokuapp.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<MdLink className="portfoliolinks" size="3em" />
												</a>
												<a
													href="https://github.com/Neuromancer93/Actualize-Yourself"
													target="_blank"
													rel="noopener noreferrer"
												>
													<MdCode className="portfoliolinks" size="3em" />
												</a>
											</li>
										</ul>
									</List>
								</Typography>
							</Grid>
						</Grid>
					</div>
				</TabContainer>
			)}
			{value === 'two' && <TabContainer>Item Two</TabContainer>}
			{value === 'three' && <TabContainer>Item Three</TabContainer>}
		</div>
	);
}

export default TabsWrappedLabel;
