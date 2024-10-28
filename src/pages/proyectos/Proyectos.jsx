import CardProjects from '../../components/CardProjects/CardProjects';
import './style.css'

const Proyectos = () => {
    return (
        <div className='section-projects'>
            <h1>Proyectos</h1>
            <div className="container-cards-projects">

                <CardProjects />
                <CardProjects />
            </div>
        </div>
    )
}

export default Proyectos;
