import React from 'react';
import Header from './components/Header/Header.jsx';
import HeaderLinks from './components/Header/HeaderLinks.jsx';
import Typography from '@material-ui/core/Typography';
import TabsWrappedLabel from './components/Tabs';
import Footer from './components/Footer/Footer.jsx';
import Grid from '@material-ui/core/Grid';
import reactpic from './components/images/react.PNG';
import csspic from './components/images/css.PNG';
import htmlpic from './components/images/HTML5.PNG';
import jspic from './components/images/javascript-icon-png-23.jpg';
import muipic from './components/images/materialui.PNG';
import mongopic from './components/images/mongodb.PNG';
import nodepic from './components/images/node.PNG';
import sqlpic from './components/images/sql.PNG';
import bootstrappic from './components/images/bootstrap.PNG';
import jquerypic from './components/images/jquery.PNG';
import bkground from './components/images/bg7.jpg';
import capture from './components/images/Capture.PNG';
import Resume3 from './components/Resume3.pdf';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

import { Element } from 'react-scroll';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import { List } from '@material-ui/core';

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<div className="App">
				<Header
					color="transparent"
					brand="Ivan Trejo"
					rightLinks={<HeaderLinks />}
					fixed
					changeColorOnScroll={{
						height: 450,
						color: 'info'
					}}
				/>
				<Element name="home" className="home">
					<div id="home">
						<img src={bkground} alt="" className="homepic" />
					</div>
				</Element>

				<Element name="portfolio" className="slant1">
					<div className="parts">
						<h1 align="center">Portfolio:</h1>
						<TabsWrappedLabel />
					</div>
				</Element>

				<Element name="technology" className="element">
					<div className="parts" id="technologies">
						<h1 align="center">Technologies used:</h1>
						<Grid
							className="tech"
							id="tech"
							container
							direction="row"
							justify="center"
							alignItems="space-evenly"
						>
							<img src={htmlpic} alt="" className="pics" />
							<img src={csspic} alt="" className="pics" />
							<img src={jspic} alt="" className="pics" />
							<img src={bootstrappic} alt="" className="pics" />
							<img src={jquerypic} alt="" className="pics" />
							<img src={nodepic} alt="" className="pics" />
							<img src={sqlpic} alt="" className="pics" />
							<img src={mongopic} alt="" className="pics" />
							<img src={muipic} alt="" className="pics" />
							<img src={reactpic} alt="" className="pics" />
						</Grid>
					</div>
				</Element>

				<Element name="about" className="slant1">
					<div className="parts" id="about">
						<h1>About Me:</h1>
						<Grid className="about" container direction="column" justify="center" alignItems="center">
							<Grid item>
								<img src={capture} alt="..." className="profile" id="profile" />
							</Grid>
							<Grid item>
								<h2 align="center">Ivan Trejo</h2>
							</Grid>
							<Grid item>
								<Typography>
									<h4 align="center">Full Stack Web Developer</h4>
								</Typography>
							</Grid>
							<Grid item>
								<Typography>
									<h5 className="description" align="center">
										Full Stack Web Developer specializing in React with a background in Philosophy
										and a passion for knowledge and coding. Effective at combining creative ideas
										and critical thinking to solve problems and develop user-friendly applications.
									</h5>
								</Typography>
							</Grid>
						</Grid>
					</div>
				</Element>

				<Element name="contact" className="element">
					<div className="parts" id="contactpage1">
						<h1 id="contactHeader" align="center">
							Contact Me:
						</h1>
						<Grid container spacing={24} direction="column" justify="space-evenly" alignItems="center">
							<Grid item xs>
								<Typography align="center">
									<List>
										<li>
											<h3>Phone number: (818) 462-7108</h3>
										</li>
										<li>
											<h3>Email: itrejonumber1@gmail.com</h3>
										</li>
										<li>
											<a
												href="https://github.com/Neuromancer93"
												target="_blank"
												rel="noopener noreferrer"
											>
												<FaGithub className="portfoliolinks" size="3em" />
											</a>
											<a
												href="https://www.linkedin.com/in/ivantrejo-neuromancer93/"
												target="_blank"
												rel="noopener noreferrer"
											>
												<FaLinkedin className="portfoliolinks" size="3em" />
											</a>
											<a href={Resume3} target="_blank" rel="noopener noreferrer">
												<FaFileAlt className="portfoliolinks" size="3em" />
											</a>
										</li>
									</List>
								</Typography>
							</Grid>
						</Grid>
					</div>
					<Footer />
				</Element>
			</div>
		</React.Fragment>
	);
}

export default App;
