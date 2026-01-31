import { ProjectCard } from "./UI/ProjectCard";

export const ProjectsComponents = () => {
	const projects = [
		{
			id: 1,
			title:
				"Sistema de Gestión de Inventario para Supermercado - Proyecto academico Java core",
			techStack: ["Java", "JSON"],
			image: "/images/Projects/utn-mdp.webp",
			gitUrl: "https://github.com/OctavioDNoval/TP_FINAL",
			liveUrl: "",
			desc: "Trabajo final para la materia laboratorio III de la facultad, un sistema de gestion de inventario en Java, arquitectura basada en POO con persistencia en JSON",
		},
		{
			id: 2,
			title: "Top Deck Importados Landing con Carrito dinamico",
			techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
			image: "/images/Projects/top-deck.webp",
			gitUrl: "https://github.com/OctavioDNoval/TopDeck",
			liveUrl: "https://topdeckimportados.netlify.app/",
			desc: "Una landing para el emprendimiento de ventas de cartas de pokemon, con JS que da dinamismo, pero no maneja pagos. Desarrollo de frontend con HTML5, CSS3 y JS ES6+, carrito de compras con persistenica en localStorage, diseño responsive en mobile first. Proyecto Freelance",
		},
		{
			id: 3,
			title: "Landing page corporativa conm Dominio personalizado",
			techStack: ["HTML", "CSS", "JavaScript", "Hostinger"],
			image: "/images/Projects/rocasur.webp",
			gitUrl: "https://github.com/OctavioDNoval/RocaSurLandingPageV2",
			liveUrl: "https://rocasur1.com.ar/mangueras-pozo/index.html",
			desc: "Landing page para la empresa de Roca Sur en la venta de mangueras Oro Flex, diseño UI/UX enfocado en conversion, Optimizacion SEO on-page, integracion con Google Analitycs, desplieuge de Hosting profesional con dominio personalizado, colaboracion con equipo de marketing de cliente",
		},
		{
			id: 4,
			title: "Aplicacion Movil E-comerce con Backend Firebase",
			techStack: ["React Native", "RKT Query", "Firebase", "Redux", "SQLite"],
			image: "/images/Projects/coderhouse.webp",
			gitUrl: "https://github.com/OctavioDNoval/EntregaFinalCoderHouse",
			liveUrl: "",
			desc: "Trabajo final para el curso de Desarrollo de aplicaciones enm CoderHouse, simula un eccomerce de ropa, con funcionalidades basicas. Desarrollo mobile con React Native, Backend serverless con Fiorebase (Firestore, Auth), persistencia offline con SQLite, estado global con Redux Toolkit",
		},
		{
			id: 7,
			title: "Front Top Deck",
			techStack: [
				"React.js",
				"React Router",
				"Context API",
				"CSS3",
				"JavaScript ES6+",
			],
			image: "/images/Projects/TopDeckFront.png",
			gitUrl: "https://github.com/OctavioDNoval/Front-Top-Deck",
			liveUrl: "",
			desc: "Front-End para un eccomerce de venta de productos TCG, SPA con React 18 + React Router, estado global con Context API, diseño responsive con CSS Grid / Flexbox, Integracion completa con API REST",
		},
		{
			id: 8,
			title: "API REST Top Deck",
			techStack: ["JWT", "Spring Boot", "Hibernate", "MySQL"],
			image: "/images/Projects/ApiTopDeck.png",
			gitUrl: "https://github.com/OctavioDNoval/API-top-deck",
			liveUrl: "",
			desc: "API REST con autenticacion, CRUD completo, API REST con Spring Boot 3. , autenticacion JWT + Spring Security, Base de datos MySQL con triggers de auditoria, sistemas de roles y permisos",
		},
		{
			id: 9,
			title: "Sistema de Gestion Empresarial para Almacenamiento en Bauleras",
			techStack: [
				"Java",
				"JWT",
				"Spring Boot",
				"MapStruct",
				"Email",
				"Hibernate",
				"MySQL",
			],
			image: "/images/Projects/m3almacenamiento.webp",
			gitUrl: "https://github.com/OctavioDNoval/M3Almacenamiento-api",
			liveUrl: "",
			desc: "Proyecto profesional - Solucion integral || Sistema de automatizacion de deudas, asignacion de clientes a productos, Notidicacion automaticas por mail, Dashboard analitico en tiempo real, etc. Backend: Spring Boot 3 + Spring Security + JWT, ORM: MapStruct + JPA/Hibernate, Base de datos: MySQL con transacciones ACID, Frontend: React 18 con arquitectura modular. Impactos de negocio: Reduccion de morosidad del 40% mediante recordatorios automaticos, Tiempo de gestion administrativo reducido en 60%",
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
