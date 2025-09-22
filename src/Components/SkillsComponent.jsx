import { SkillCard } from "./UI/SkillCard";

export const SkillsComponent = () => {
	const skills = [
		{
			id: 1,
			title: "💻 FrontEnd",
			stack: [
				"HTML",
				"CSS",
				"React.js",
				"React Native",
				"JavaScript",
				"TypeScript",
			],
		},
		{
			id: 2,
			title: "📃 BackEnd",
			stack: ["Java", "SpringBoot", "API REST", "Python"],
		},
		{
			id: 3,
			title: "📊 Bases de datos",
			stack: ["SQL", "MySQL", "SQLite", "Firebase", "NoSQL"],
		},
	];

	return (
		<section id="skills" className="section">
			<div className="section-title-container">
				<h2 className="section-title">Stack Tecnologico</h2>
			</div>
			<div className="skills-card-container">
				{skills.map((s) => (
					<SkillCard title={s.title} stack={s.stack} />
				))}
			</div>
		</section>
	);
};
