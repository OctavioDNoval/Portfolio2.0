import { Github, Link } from "lucide-react";

export const ProjectCard = ({
	title,
	techStack,
	image,
	gitUrl,
	liveUrl,
	desc,
}) => {
	const hasLiveUrl = liveUrl && liveUrl.trim() !== "";

	return (
		<article className="project-card">
			<div className="card-img-container">
				<img src={image} alt={title} className="card-img" />
			</div>
			<div className="card-info">
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
						<Github size={24} />
						GitHub
					</a>
					<a
						href={hasLiveUrl ? liveUrl : ""}
						className={`card-a card-link ${hasLiveUrl ? "" : "disabled"}`}
						onClick={hasLiveUrl ? "" : (e) => e.preventDefault()}
					>
						<Link size={24} />
						Link
					</a>
				</div>
			</div>
		</article>
	);
};
