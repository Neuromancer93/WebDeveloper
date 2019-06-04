/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { List, ListItem, withStyles } from '@material-ui/core';

import footerStyle from '../Footer/footerStyle.jsx';

function Footer({ ...props }) {
	const { classes, whiteFont } = props;
	const footerClasses = classNames({
		[classes.footer]: true,
		[classes.footerWhiteFont]: whiteFont
	});
	const aClasses = classNames({
		[classes.a]: true,
		[classes.footerWhiteFont]: whiteFont
	});
	return (
		<footer className={footerClasses}>
			<div className={classes.container}>
				<div className={classes.left}>
					<List className={classes.list}>
						<ListItem className={classes.inlineBlock}>
							<a className={classes.block}>Full Stack Web Development</a>
						</ListItem>
					</List>
				</div>
				{/* <a align="center">Up</a> */}
				<div className={classes.right}>&copy; {1900 + new Date().getYear()} by Ivan Trejo</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
	whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
