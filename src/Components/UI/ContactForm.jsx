import { Send } from "lucide-react";

export const ContactForm = () => {
	return (
		<>
			<form className="form">
				<div className="form-main-info">
					<div className="form-input-container  form-main-info-input-container">
						<label htmlFor="name-input">Nombre *</label>
						<input
							type="text"
							placeholder="Nombre"
							className="form-main-info-input form-input"
							id="name-input"
							required
						/>
					</div>
					<div className="form-input-container form-main-info-input-container">
						<label htmlFor="email-input">Email *</label>
						<input
							type="text"
							placeholder="Email"
							className="form-main-info-input form-input"
							input="email-input"
							required
						/>
					</div>
				</div>
				<div className="form-input-container">
					<label htmlFor="asunto-input">Asunto *</label>
					<input
						type="text"
						placeholder="De que quieres hablar?"
						id="asunto-input"
						required
						className="form-input"
					/>
				</div>
				<div className="form-input-container form-textarea-container">
					<label htmlFor="msg-input">Mensaje *</label>
					<textarea
						placeholder="Deja tu mensaje"
						id="msg-input"
						required
						className="form-input form-textarea"
					/>
				</div>

				<button type="submit" className="form-submit-btn">
					<Send />
					Enviar Mensaje
				</button>
			</form>
		</>
	);
};
