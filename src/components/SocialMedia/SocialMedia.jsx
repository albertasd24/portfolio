import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = ({ }) => {
	return (
		<div className='social-media'>
			<a href="https://github.com/StivenB23"><FaGithub /></a>
			<a href=""><FaLinkedin /></a>
			<a href=""><FaCodepen /></a>
		</div>
	);
};

SocialMedia.propTypes = {};

export default SocialMedia;