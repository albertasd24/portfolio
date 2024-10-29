import CardExperience from "../../components/CardExperience/CardExperience";
import './style.css'
const Experience = () => {
    return (
        <section className="section-experience">
            <h1>Experiencia</h1>
            <div className="container-cards-experience">
                <CardExperience experience={{ date: "Junio 202 - Actualmente", nameBussines: "Grupo ASD", roleBussines: "Backend Developer", tags: ["Express", "MongoDB", "Docker","..."] }} />
                <CardExperience experience={{ date: "June 2024 - June 2025", nameBussines: "Univ. Rosario", roleBussines: "Tutor de Clase", tags: ["Backend","FullStack"] }} />
                <CardExperience experience={{ date: "Diciembre 2022 - Junio 2023", nameBussines: "SENA", roleBussines: "FullStack Enginer", tags: ["Backend","FullStack"] }} />
                <CardExperience experience={{ date: "Diciembre 2022 - Junio 2023", nameBussines: "Códifico", roleBussines: "FullStack Enginer", tags: ["Backend","FullStack"] }} />
            </div>
        </section>
    )
}

export default Experience;
