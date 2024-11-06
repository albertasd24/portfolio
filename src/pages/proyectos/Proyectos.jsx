import CardProjects from '../../components/CardProjects/CardProjects';
import './style.css'

const Proyectos = () => {
    return (
        <div className='section-projects'>
            <h2 className='section-title'>Proyectos</h2>
            <div className="container-cards-projects">
                <CardProjects project={{image:"https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png?w=1400", title:"AsisQuick", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel dictum leo, vel ultricies ligula. Phasellus in velit tristique, euismod libero vel, congue velit. Quisque sed euismod diam. Ut in ullamcorper ipsum. In et metus non arcu fringilla blandit a in velit."}} />
                <CardProjects project={{image:"https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png?w=1400", title:"GastoZen", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel dictum leo, vel ultricies ligula. Phasellus in velit tristique, euismod libero vel, congue velit. Quisque sed euismod diam. Ut in ullamcorper ipsum. In et metus non arcu fringilla blandit a in velit."}} />
            </div>
        </div>
    )
}

export default Proyectos;
