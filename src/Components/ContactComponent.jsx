import { ContactForm } from "./UI/ContactForm";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { SocialPlate } from "./UI/SocialPlate";

export const ContactComponent = () => {
	return (
		<section id="contact" className="section">
			<div className="section-title-container">
				<h2 className="section-title">Contactame!</h2>
			</div>
			<div className="contact-cards-section">
				<div className="form-container">
					<div className="form-title-container">
						<div className="form-title-icon">
							<Send color="white" size={28} />
						</div>
						<h3 className="form-title">Enviame un mensaje</h3>
					</div>
					<ContactForm />
				</div>
				<div className="contact-cards">
					<div className="contact-info-card">
						<h3 className="contact-info-title">Info. de Contacto</h3>
						<ul className="contact-info-list">
							<li className="contact-info-list-items">
								<div className="contact-icon-container">
									<Mail />
								</div>
								<div className="contact-info">
									<h4>Email</h4>
									<p>odnr2004@gmail.com</p>
								</div>
							</li>

							<li className="contact-info-list-items">
								<div className="contact-icon-container">
									<Phone />
								</div>
								<div className="contact-info">
									<h4>Telefono</h4>
									<p>+54 223 591 3715</p>
								</div>
							</li>

							<li className="contact-info-list-items">
								<div className="contact-icon-container">
									<MapPin />
								</div>
								<div className="contact-info">
									<h4>Ubicacion</h4>
									<p>Mar del Plata, Buenos Aires, Argentina</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="social-card">
						<h3 className="contact-info-title">Sigueme en redes</h3>
						<SocialPlate />
					</div>

					<div className="disponibility-card">
						<h4>Disponible para nuevos proyectos</h4>
						<p>Actualmente acepto nuevos proyectos y colaboraciones</p>
					</div>
				</div>
			</div>
		</section>
	);
};
