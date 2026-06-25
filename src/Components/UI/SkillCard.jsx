import { Code2, Server, Database } from "lucide-react";

const iconMap = {
	FrontEnd: Code2,
	BackEnd: Server,
	"Bases de datos": Database,
};

export const SkillCard = ({ title, stack, ...props }) => {
	const cleanTitle = title.replace(/[^\w\s]/g, "").trim();
	const Icon = iconMap[cleanTitle] || Code2;

	return (
		<article
			className={`skill-card ${props.className || ""}`}
			data-reveal={props["data-reveal"] || undefined}
			style={props.style || undefined}
		>
			<div className="skill-card-header">
				<div className="skill-card-icon">
					<Icon size={26} />
				</div>
				<h3 className="skill-card-title">{cleanTitle}</h3>
			</div>
			<div className="skill-card-divider" />
			<ul className="skill-card-list">
				{stack.map((s, index) => (
					<li key={index} className="skill-card-list-item">
						{s}
					</li>
				))}
			</ul>
		</article>
	);
};
