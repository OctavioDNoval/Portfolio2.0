import { Mail, Download } from "lucide-react";
import { SocialPlate } from "./UI/SocialPlate";

export const HomeComponent = ({ name, lastname }) => {
	return (
		<section id="inicio" className="section">
			<div className="home-container">
				<div className="home-img-container">
					<div className="img-container">
						<img src="" alt="" />
					</div>
				</div>
				<div className="home-info-contanier">
					<h1 className="name">{name.concat(" ").concat(lastname)}</h1>
					<h2 className="name-info">Desarrollador Full Stack</h2>
					<p className="desc">
						Soy estudiante de la T.U.P. (Tecnicatura Universitaria en
						Programación) en la U.T.N. (Universidad Tecnológica Nacional). Me
						desempeño en proyectos con el uso de tecnologías como C, Java, SQL,
						HTML, CSS y JavaScript.
						<br />
						Destaco el trabajo en equipo en todos los proyectos realizados.
					</p>
					<p className="extra-text">excepto por este :)</p>
					<div className="home-info-buttons">
						<button type="button" className="info-btn contact-btn">
							<Mail />
							<p className="info-btn-text">Contactar Ahora</p>
						</button>
						<button type="button" className="info-btn cv-btn">
							<Download />
							<p className="info-btn-text">Descargar CV</p>
						</button>
					</div>
					<SocialPlate />
				</div>
			</div>
		</section>
	);
};
