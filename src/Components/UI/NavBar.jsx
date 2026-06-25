import { useEffect, useState } from "react";

export const NavBar = ({ isOpen, onClose }) => {
	const [activeSection, setActiveSection] = useState("inicio");

	useEffect(() => {
		const sections = document.querySelectorAll(".section");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: 0.4,
			}
		);

		sections.forEach((sec) => observer.observe(sec));

		return () => observer.disconnect();
	}, []);

	const handleScroll = (e, id) => {
		e.preventDefault();
		const section = document.getElementById(id);
		section?.scrollIntoView({ behavior: "smooth" });

		if (onClose) {
			onClose();
		}
	};

	const getItemClass = (sectionId) =>
		`navBar-list_item ${activeSection === sectionId ? "active" : ""}`;

	return (
		<nav className={`navBar ${isOpen ? "open" : ""}`}>
			<ul className="navBar-list">
				<a
					href="#inicio"
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: 0, behavior: "smooth" });
						if (onClose) onClose();
					}}
				>
					<li className={getItemClass("inicio")}>Inicio</li>
				</a>
				<a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
					<li className={getItemClass("projects")}>Proyectos</li>
				</a>
				<a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
					<li className={getItemClass("skills")}>Habilidades</li>
				</a>
				<a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
					<li className={getItemClass("contact")}>Contacto</li>
				</a>
			</ul>
		</nav>
	);
};
