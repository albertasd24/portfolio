
import './CardProjects.css';
import image from '../../assets/image_card_project.png'
const CardProjects = ({ project }) => {
	const { title, description, linkGithub } = project;
	return (
		<a href={linkGithub} target='_blank'>
			<div className='card-projects'>
				<div className="card-projects--head">
					<img src={image} alt="" />
				</div>
				<div className="card-projects--body">
					<h4>{title}</h4>
					<p className='description'>{description}</p>
				</div>
			</div>
		</a>
	);
};

CardProjects.propTypes = {};

export default CardProjects;