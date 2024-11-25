import './CardExperience.css';
import audioMP3 from "../../assets/audio/message.mp3"
const CardExperience = ({ experience }) => {
	const { date, nameBussines, description, roleBussines, tags } = experience;
	const audio = new Audio(audioMP3);
	const hanldeOver = () => {
		audio.play()
		audio.volume = 1;
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