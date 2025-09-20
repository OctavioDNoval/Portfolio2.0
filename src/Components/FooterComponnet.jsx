import { Mail, ArrowBigUp } from "lucide-react";
import { NamePlate } from "./UI/NamePlate";
import { SocialPlate } from "./UI/SocialPlate";

export const FooterComponnet = ({ name, lastname }) => {
	return (
		<footer className="footer">
			<div className="footer-wrapper">
				<div className="footer-main">
					<div className="footer-personal-info">
						<NamePlate name={name} lastname={lastname} />
						<div className="footer-personal-desc">
							<p>
								Desarrollador Full Stack apasionado por crear experiencias
								digitales excepcionales y soluciones innovadoras.
							</p>
						</div>
						<SocialPlate />
					</div>
					<div className="footer-fast-nav">
						<h4>Navegacion Rapida</h4>
						<ul>
							<li>
								<a href="">Inicio</a>
							</li>
							<li>
								<a href="">Proyectos</a>
							</li>
							<li>
								<a href="">Habilidades</a>
							</li>
							<li>
								<a href="">Contacto</a>
							</li>
						</ul>
					</div>
					<div className="footer-contact-a">
						<h4>Hablamos?</h4>
						<p>
							Siempre abierto a nuevas oportunidades y colaboraciones
							interesantes.
						</p>
						<a href="">
							<Mail />
							<p>Iniciar conversacion</p>
						</a>
					</div>
				</div>

				<div className="footer-copy">
					<p>© 2025 Octavio Noval. Hecho con React.js & JavaScript</p>
					<a href="">
						<ArrowBigUp />
					</a>
				</div>
			</div>
		</footer>
	);
};
