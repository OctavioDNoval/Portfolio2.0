import { useEffect, useState } from "react";

export const NavBar = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll(".section");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
						console.log(activeSection);
					}
				});
			},
			{
				threshold: 0.6,
			}
		);

		sections.forEach((sec) => observer.observe(sec));

		return () => observer.disconnect();
	}, [activeSection]);

	const handleScroll = (e, id) => {
		e.preventDefault();
		const section = document.getElementById(id);
		section?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className="navBar">
			<ul className="navBar-list">
				<a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					<li className="navBar-list_item">Inicio</li>
				</a>
				<a href="#inicio" onClick={(e) => handleScroll(e, "inicio")}>
					<li
						className={`navBar-list_item ${
							activeSection === "inicio" ? "active" : ""
						}`}
					>
						Sobre mi
					</li>
				</a>
				<a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
					<li
						className={`navBar-list_item ${
							activeSection === "projects" ? "active" : ""
						}`}
					>
						{" "}
						Proyectos
					</li>
				</a>
				<a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
					<li
						className={`navBar-list_item ${
							activeSection === "skills" ? "active" : ""
						}`}
					>
						Habilidades
					</li>
				</a>
				<a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
					<li
						className={`navBar-list_item ${
							activeSection === "contact" ? "active" : ""
						}`}
					>
						Contacto
					</li>
				</a>
			</ul>
		</nav>
	);
};
