import './TitleGlitch.css';

const TitleGlitch = ({ text = "" }) => {
	return (
		<div className='titleglitch'>
			<h2 className="hero glitch layers" data-text={text}>
				<span>{text}</span>
			</h2>
		</div>
	);
};

TitleGlitch.propTypes = {};

export default TitleGlitch;