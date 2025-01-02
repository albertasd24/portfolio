import './CardExperience.css';
import audioMP3 from "../../assets/audio/message.mp3";
import { useRef } from "react";

const CardExperience = ({ experience }) => {
  const { date, nameBussines, description, roleBussines } = experience;
  const audioRef = useRef(new Audio(audioMP3)); // Instancia única de audio

  const handleOver = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0; // Reinicia el audio
      audio.volume = 1;
      audio.play().catch((err) => {
        console.error("Error al reproducir el audio:", err);
      });
    }
  };

  return (
    <div className="cardexperience" onMouseEnter={handleOver}>
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
