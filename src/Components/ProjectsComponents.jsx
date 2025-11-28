import { ProjectCard } from "./UI/ProjectCard";

export const ProjectsComponents = () => {
	const projects = [
		{
			id: 1,
			title: "Trabajo final progra III",
			techStack: ["Java", "JSON"],
			image: "/images/Projects/utn-mdp.webp",
			gitUrl: "https://github.com/OctavioDNoval/TP_FINAL",
			liveUrl: "",
			desc: "Trabajo final para la materia laboratorio III de la facultad, un sistema de gestion de inventario en Java",
		},
		{
			id: 2,
			title: "Top Deck Importados Landing",
			techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
			image: "/images/Projects/top-deck.webp",
			gitUrl: "https://github.com/OctavioDNoval/TopDeck",
			liveUrl: "https://topdeckimportados.netlify.app/",
			desc: "Una landing para el emprendimiento de ventas de cartas de pokemon, con JS que da dinamismo, pero no maneja pagos",
		},
		{
			id: 3,
			title: "Roca Sur Landing",
			techStack: ["HTML", "CSS", "JavaScript", "Hostinger"],
			image: "/images/Projects/rocasur.webp",
			gitUrl: "https://github.com/OctavioDNoval/RocaSurLandingPageV2",
			liveUrl: "https://rocasur1.com.ar/mangueras-pozo/index.html",
			desc: "Landing page para la empresa de Roca Sur en la venta de mangueras Oro Flex",
		},
		{
			id: 4,
			title: "Entrega Final CoderHouse",
			techStack: ["React Native", "RKT Query", "Firebase", "Redux", "SQLite"],
			image: "/images/Projects/coderhouse.webp",
			gitUrl: "https://github.com/OctavioDNoval/EntregaFinalCoderHouse",
			liveUrl: "",
			desc: "Trabajo final para el curso de Desarrollo de aplicaciones enm CoderHouse, simula un eccomerce de ropa, con funcionalidades basicas",
		},
		{
			id: 5,
			title: "Portfolio",
			techStack: ["HTML", "CSS", "React.js"],
			image: "/images/Projects/portfolio.webp",
			gitUrl: "https://github.com/OctavioDNoval/Portfolio2.0",
			liveUrl: "",
			desc: "Segunda version de portfolio personal, hecho con react",
		},
		{
			id: 6,
			title: "Ecommerce API MokUp (not finished)",
			techStack: ["Java", "Spring Boot"],
			image: "/images/Projects/ecommerceApi.webp",
			gitUrl: "https://github.com/OctavioDNoval/EcommerceMokUp",
			liveUrl: "",
			desc: "API de un ecommerce del ambito de tienda de ropa",
		},
	];

	return (
		<section id="projects" className="section">
			<div className="section-title-container">
				<h2 className="section-title">Proyectos Destacados</h2>
			</div>
			<div className="projects-cards-container">
				{projects.map((p) => (
					<ProjectCard
						key={p.id}
						title={p.title}
						techStack={p.techStack}
						image={p.image}
						gitUrl={p.gitUrl}
						liveUrl={p.liveUrl}
						desc={p.desc}
					/>
				))}
			</div>
		</section>
	);
};
