import './CardExperience.css';

const CardExperience = ({ experience }) => {
	const { date, nameBussines, description, roleBussines, tags } = experience;
	return (
		<div className='cardexperience'>
			<div className="content-date">
				<p>{date}</p>
			</div>
			<div className="">
				<h5 className='name-bussines'>{nameBussines || "Name Bussines"}</h5>
				<p className='role'>{roleBussines || "Role Bussines"}</p>
				<p className='description'>{description || ""}</p>
				<div className="container-tags">
					{tags.map((tag) => (
						<span className="tag">{tag}</span>
					))}
				</div>
			</div>
		</div>
	);
};

CardExperience.propTypes = {};

export default CardExperience;