export const SkillCard = ({ title, stack }) => {
	return (
		<article className="skill-card">
			<h3 className="skill-card-title">{title}</h3>
			<ul className="skill-card-list">
				{stack.map((s, index) => (
					<p key={index} className="skill-card-list-item">
						{s}
					</p>
				))}
			</ul>
		</article>
	);
};
