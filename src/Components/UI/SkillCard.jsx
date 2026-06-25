export const SkillCard = ({ title, stack, ...props }) => {
	return (
		<article className={`skill-card ${props.className || ""}`} data-reveal={props["data-reveal"] || undefined} style={props.style || undefined}>
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
