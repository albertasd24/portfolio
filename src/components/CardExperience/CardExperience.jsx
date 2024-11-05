import './CardExperience.css';

const CardExperience = ({ experience }) => {
	const { date, nameBussines, description, roleBussines, tags } = experience;
	const audio = new Audio("https://stivenb23.github.io/Landing-Oshi-No-Ko/assets/audio/audio_win.mp3");
	const hanldeOver = () => {
		// audio.play()
	}
	return (
		<div className="cardexperience" onMouseEnter={hanldeOver}>
			<div className="cardexperience-content">
				<h4>{roleBussines || "Role Bussines"}</h4>
				<p className="name-bussines">{nameBussines || "Name Bussines"}</p>
				<p className="date">{date}</p>
				<p className="description">{description || ""}</p>
			</div>
		</div>
	);
};

CardExperience.propTypes = {};

export default CardExperience;