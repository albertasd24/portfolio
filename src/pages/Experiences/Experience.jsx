import CardExperience from "../../components/CardExperience/CardExperience";
import './style.css'
const Experience = () => {
    return (
        <section className="section-experience">
            <h1>Experiencia</h1>
            <div className="container-cards-experience">
                <CardExperience experience={{ date: "June 2024 - June 2025", nameBussines: "Google", roleBussines: "FullStack Enginer", tags: ["HTML", "CSS", "JavaScript"] }} />
                <CardExperience experience={{ date: "June 2024 - June 2025", nameBussines: "Grupo ASD", roleBussines: "FullStack Enginer", tags: ["Frontend"] }} />
                <CardExperience experience={{ date: "June 2024 - June 2025", nameBussines: "Microsoft", roleBussines: "FullStack Enginer", tags: ["Backend","FullStack"] }} />
            </div>
        </section>
    )
}

export default Experience;
