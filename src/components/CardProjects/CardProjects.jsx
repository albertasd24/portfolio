
import './CardProjects.css';

const CardProjects = ({ }) => {
	return (
		<div className='card-projects'>
			<div className="card-projects--head">
				<img src="https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png?w=1400" alt="" />
			</div>
			<div className="card-projects--body">
				<h4>Name Bussines</h4>
				<p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus! Impedit possimus quam ducimus nostrum voluptatibus velit consequuntur id dolores sint, et placeat voluptate numquam nulla natus quas pariatur nemo aliquam non </p>
				<div className="container-tags">
			
				</div>
			</div>
		</div>
	);
};

CardProjects.propTypes = {};

export default CardProjects;