import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = ({ }) => {
	return (
		<div className='social-media'>
			<a href="https://github.com/StivenB23"><FaGithub /></a>
			<a href="https://www.linkedin.com/in/albert-stive-ospina-avenda%C3%B1o-5a729b20b/"><FaLinkedin /></a>
			<a href="https://codepen.io/StivenOspina"><FaCodepen /></a>
		</div>
	);
};

SocialMedia.propTypes = {};

export default SocialMedia;