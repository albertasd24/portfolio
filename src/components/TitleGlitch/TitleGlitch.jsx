import './TitleGlitch.css';

const TitleGlitch = ({ text = "" }) => {
	return (
		<div className='titleglitch'>
			<h1 className="hero glitch layers" data-text={text}>
				<span>{text}</span>
			</h1>
		</div>
	);
};

TitleGlitch.propTypes = {};

export default TitleGlitch;