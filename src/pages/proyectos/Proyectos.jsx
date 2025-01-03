import CardProjects from '../../components/CardProjects/CardProjects';
import TitleRandom from '../../components/TitleRandom/TitleRandom';
import './style.css'

const Proyectos = () => {
    const projectInformation = [
        { 
            title: "AsisQuick", 
            description: "Este es un pequeño proyecto de gestión de incidencias diseñado para una institución académica. El software permite a los docentes y usuarios reportar problemas en los ambientes de clase y equipos de cómputo de manera eficiente, facilitando su seguimiento y resolución.",
            linkGithub: "https://github.com/StivenB23/AsisQuick/tree/main"
        },
        { 
            title: "GastoZen", 
            description: "Este repositorio contiene el código fuente del backend de GastoZen, un aplicativo que permite a los usuarios registrar y categorizar sus gastos de forma eficiente. Par realizar un seguimiento adecuado de los gastos que hace de forma diaria.",
            linkGithub: "https://github.com/StivenB23/GastoZenBackend"
        }
    ]
    return (
        <div className='section-projects'>
            <TitleRandom title='Proyectos' className='section-title' />
            <div className="container-cards-projects">
                {/* <CardProjects project={} /> */}
                {projectInformation.map(project => (
                    <CardProjects project={project} />
                ))}
            </div>
        </div>
    )
}

export default Proyectos;
