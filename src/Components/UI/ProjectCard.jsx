import { Github, Link } from "lucide-react";

export const ProjectCard = ({
	title,
	techStack,
	image,
	gitUrl,
	liveUrl,
	desc,
}) => {
	return (
		<article>
			<div className="card-img-container">
				<img src={image} alt={title} className="card-img" />
			</div>
			<h3 className="card-title">{title}</h3>
			<p className="card-desc">{desc}</p>
			<div className="card-tech-stack-container">
				{techStack.map((t, index) => (
					<p key={index} className="card-tech">
						{t}
					</p>
				))}
			</div>
			<div className="card-a-container">
				<a href={gitUrl} className="card-a card-github">
					<Github />
					GitHub
				</a>
				<a href={liveUrl} className="card-a card-link">
					<Link />
					Link
				</a>
			</div>
		</article>
	);
};
