
import './CardProjects.css';

const CardProjects = ({ project }) => {
	const { image, title, description } = project;
	return (
		<div className='card-projects'>
			<div className="card-projects--head">
				<img src={image} alt="" />
				{/* <img src="https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png?w=1400" alt="" /> */}
			</div>
			<div className="card-projects--body">
				<h4>{title}</h4>
				<p className='description'>{description}</p>
				<div className="container-tags">

				</div>
			</div>
		</div>
	);
};

CardProjects.propTypes = {};

export default CardProjects;