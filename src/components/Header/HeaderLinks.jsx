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
				<Button color="transparent" className={classes.navLink}>
					<Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-67} duration={500}>
						Portfolio
					</Link>
				</Button>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Button color="transparent" className={classes.navLink}>
					<Link activeClass="active" to="technology" spy={true} smooth={true} offset={-67} duration={500}>
						Technologies
					</Link>
				</Button>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Button color="transparent" className={classes.navLink}>
					<Link activeClass="active" to="about" spy={true} smooth={true} offset={-67} duration={500}>
						About Me
					</Link>
				</Button>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Button color="transparent" className={classes.navLink}>
					<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-67} duration={500}>
						Contact Me
					</Link>
				</Button>
			</ListItem>
		</List>
	);
}

export default withStyles(headerLinksStyle)(HeaderLinks);
