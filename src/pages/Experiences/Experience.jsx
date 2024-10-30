import CardExperience from "../../components/CardExperience/CardExperience";
import './style.css'
const Experience = () => {
    return (
        <section className="section-experience">
            <h1>Experiencia</h1>
            <div className="container-cards-experience">
                <CardExperience experience={{ date: "Junio 202 - Actualmente", nameBussines: "Grupo ASD",description:"Durante el último año y cuatro meses, he desempeñado un papel clave como programador backend en Grupo ASD, especializándome en el desarrollo de arquitecturas backend robustas, modelamiento de software con UML y gestión de despliegues eficientes mediante Docker. Mi enfoque ha sido asegurar el funcionamiento óptimo y confiable de los sistemas, mientras que mi participación en labores de investigación me ha permitido explorar e implementar nuevas tecnologías y estrategias para optimizar procesos. Con esto, he contribuido activamente al crecimiento y a la innovación continua dentro de la organización", roleBussines: "Backend Developer", tags: ["Node js", "MongoDB", "Docker"] }} />
                <CardExperience experience={{ date: "June 2024 - June 2025", nameBussines: "Univ. Rosario",description:"Como tutor en clases virtuales de algoritmia y programación, diseñé y entregué contenido educativo adaptado a entornos digitales, orientado a un aprendizaje efectivo y accesible. Mi enfoque estuvo en crear ambientes interactivos que fomentaran una comprensión profunda de conceptos complejos, permitiendo a los estudiantes dominar habilidades fundamentales en algoritmia y fortalecer su pensamiento lógico enfocado en la programación.", roleBussines: "Tutor de Clase", tags: ["Docencia"] }} />
                <CardExperience experience={{ date: "Diciembre 2022 - Junio 2023", nameBussines: "SENA",description:"En mi rol como desarrollador Full Stack, trabajé en la creación de soluciones digitales para optimizar los procesos internos de la compañía. Desde el diseño de interfaces intuitivas hasta la implementación de backend, cada proyecto buscaba mejorar la eficiencia y productividad de los equipos. Mi experiencia incluyó la gestión de bases de datos y la configuración de servidores, asegurando que las aplicaciones fueran robustas, escalables y alineadas con las necesidades estratégicas de la empresa.", roleBussines: "FullStack Enginer", tags: ["Backend","FullStack"] }} />
                <CardExperience experience={{ date: "Diciembre 2022 - Junio 2023", nameBussines: "Códifico",description:"Como desarrollador Full Stack, desempeñé un rol clave en la creación de aplicaciones completas, combinando el desarrollo de interfaces dinámicas y funcionales con una implementación robusta en el backend. Mi trabajo abarcó desde el diseño y la optimización de tecnologías front-end hasta la administración de bases de datos y la configuración de servidores. Esta experiencia me permitió ofrecer soluciones efectivas y bien integradas en todas las etapas del desarrollo de proyectos.", roleBussines: "FullStack Enginer", tags: ["Backend","FullStack"] }} />
            </div>
        </section>
    )
}

export default Experience;
