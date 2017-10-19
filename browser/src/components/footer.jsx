import React from 'react';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import LinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';

const Footer = () => (
	<footer className="fixed-bottom footer-icons">
		<ul>
			<li><FaGithubSquare /></li>
			<li><LinkedinSquare /></li>
			<li><FaTwitterSquare /></li>
			<li><FaFacebookSquare /></li>
		</ul>
	</footer>
);

export default Footer;
