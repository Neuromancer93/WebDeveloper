import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import signup from '../components/images/AS-signup.PNG';
import profile from '../components/images/AS-profile.PNG';
import goal from '../components/images/AS-goal.PNG';
import timeline from '../components/images/AS-timeline.PNG';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
	{
		label: 'Actualize Yourself - Home Page with Timeline',
		imgPath: timeline
	},
	{
		label: 'Actualize Yourself – Initial Signup',
		imgPath: signup
	},
	{
		label: 'Actualize Yourself - Create a Profile',
		imgPath: profile
	},
	{
		label: 'Actualize Yourself - Create a Goal',
		imgPath: goal
	}
];

const styles = (theme) => ({
	root: {
		maxWidth: 550,
		flexGrow: 1,
		borderRadius: '50%'
		// // margin: '55px 25px 35px 275px',
		// marginLeft: '170px'
		// padding: '5px 10px 35px 150px'
		// alignSelf: 'center'
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		height: 50,
		paddingLeft: theme.spacing.unit * 4,
		backgroundColor: theme.palette.background.default
	},
	img: {
		height: 350,
		display: 'block',
		maxWidth: 700,
		overflow: 'hidden',
		width: '100%'
	}
});

class SwipeableTextMobileStepper extends React.Component {
	state = {
		activeStep: 0
	};

	handleNext = () => {
		this.setState((prevState) => ({
			activeStep: prevState.activeStep + 1
		}));
	};

	handleBack = () => {
		this.setState((prevState) => ({
			activeStep: prevState.activeStep - 1
		}));
	};

	handleStepChange = (activeStep) => {
		this.setState({ activeStep });
	};

	render() {
		const { classes, theme } = this.props;
		const { activeStep } = this.state;
		const maxSteps = tutorialSteps.length;

		return (
			<div className={classes.root}>
				<Paper square elevation={0} className={classes.header}>
					<Typography>{tutorialSteps[activeStep].label}</Typography>
				</Paper>
				<AutoPlaySwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={activeStep}
					onChangeIndex={this.handleStepChange}
					enableMouseEvents
				>
					{tutorialSteps.map((step, index) => (
						<div key={step.label}>
							{Math.abs(activeStep - index) <= 2 ? (
								<img className={classes.img} src={step.imgPath} alt={step.label} />
							) : null}
						</div>
					))}
				</AutoPlaySwipeableViews>
				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					className={classes.mobileStepper}
					nextButton={
						<Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
							Next
							{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
						</Button>
					}
					backButton={
						<Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
							{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
							Back
						</Button>
					}
				/>
			</div>
		);
	}
}

SwipeableTextMobileStepper.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);
