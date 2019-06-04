import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';
import SwipeableTextMobileStepper2 from './SwipeableTextMobileStepper2';
import SwipeableTextMobileStepper3 from './SwipeableTextMobileStepper3';
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
					<Tab value="one" label="Fitness Tracker" />
					<Tab value="two" label="Actualize Yourself" />
					<Tab value="three" label="Online Bookcase" />
				</Tabs>
			</AppBar>
			{value === 'one' && (
				<TabContainer>
					<div className="parts" id="Pitem1">
						<h2 align="center">Fitness Tracker </h2>
						<Grid container direction="row" justify="space-evenly" alignContent="baseline">
							<Grid item xs align="center">
								<SwipeableTextMobileStepper2 />
							</Grid>
							<Grid item xs>
								<Typography>
									<List>
										<ul>
											<li>A website that logs your basic health stats.</li>
											<li>Create an account and start your fitness journey.</li>
											<li>Keep track of your daily body weight and calories consumed/burned.</li>
											<li>
												The daily logs create a visualization graph in real time helping you
												keep track of your stats.
											</li>
											<li>
												Includes a calendar to input your workouts or even rest days, as well as
												a messaging system to stay in touch with and motivate your friends on
												their fitness journey
											</li>
											<li>Uses: React, MongoDB, Express.js, Node.js, Chart.js</li>
											<li>
												<a
													href="https://fitness-tracker-project3.herokuapp.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<MdLink className="portfoliolinks" size="3em" />
												</a>
												<a
													href="https://github.com/warnerhannah/project3-fitness-tracker"
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
			{value === 'two' && (
				<TabContainer>
					<div className="parts" id="Pitem1">
						<h2 align="center">Actualize Yourself</h2>
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
											<li>
												Uses: Javascript, HTML, CSS, SQL, Express.js, Handlebars.js, Node.js,
												Timeline.js
											</li>
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
			{value === 'three' && (
				<TabContainer>
					<div className="parts" id="Pitem1">
						<h2 align="center">Online Bookcase</h2>
						<Grid container direction="row" justify="space-evenly" alignContent="baseline">
							<Grid item xs align="center">
								<SwipeableTextMobileStepper3 />
							</Grid>
							<Grid item xs>
								<Typography>
									<List>
										<ul>
											<li>Do you sometimes forget what books you have in your collection?</li>
											<li>Using Online Bookcase you can easily keep track of all your books</li>
											<li>Simply create an account and start logging your books</li>
											<li>
												You can look by searching for title, isbn, or use your device's camera
												to scan the book's barcode
											</li>
											<li>It's that easy!</li>
											<li>
												Uses: Javascript, CSS3, HTML5, Bootstrap, JQuery, Firebase, and Google
												Books API
											</li>
											<li>
												<a
													href="https://neuromancer93.github.io/OnlineBookcase/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<MdLink className="portfoliolinks" size="3em" />
												</a>
												<a
													href="https://github.com/Neuromancer93/OnlineBookcase"
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
		</div>
	);
}

export default TabsWrappedLabel;
