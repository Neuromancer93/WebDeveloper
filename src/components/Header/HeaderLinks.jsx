/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-scroll';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '../CustomButtons/Button.jsx';

import headerLinksStyle from '../Header/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
	const { classes } = props;
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-67} duration={500}>
					<Button color="transparent" className={classes.navLink}>
						Portfolio
					</Button>
				</Link>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Link activeClass="active" to="technology" spy={true} smooth={true} offset={-67} duration={500}>
					<Button color="transparent" className={classes.navLink}>
						Technologies
					</Button>
				</Link>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Link activeClass="active" to="about" spy={true} smooth={true} offset={-67} duration={500}>
					<Button color="transparent" className={classes.navLink}>
						About Me
					</Button>
				</Link>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-67} duration={500}>
					<Button color="transparent" className={classes.navLink}>
						Contact Me
					</Button>
				</Link>
			</ListItem>
		</List>
	);
}

export default withStyles(headerLinksStyle)(HeaderLinks);
