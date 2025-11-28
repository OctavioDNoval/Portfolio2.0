import { useForm } from "@formspree/react";
import { Send } from "lucide-react";

export const ContactForm = () => {
	const [state, handleSubmit] = useForm("mdkrbgnp");

	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-main-info">
					<div className="form-input-container  form-main-info-input-container">
						<label htmlFor="name-input">Nombre *</label>
						<input
							type="text"
							placeholder="Nombre"
							name="name"
							className="form-main-info-input form-input"
							id="name-input"
							required
						/>
					</div>
					<div className="form-input-container form-main-info-input-container">
						<label htmlFor="email-input">Email *</label>
						<input
							type="email"
							name="email"
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
						name="subject"
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
						name="message"
						id="msg-input"
						required
						className="form-input form-textarea"
					/>
				</div>

				<button
					type="submit"
					className="form-submit-btn"
					disabled={state.submitting}
				>
					<div className="submit-content">
						<Send />
						{state.submitting ? "Enviando..." : "Enviar Mensaje"}
					</div>
				</button>
			</form>
		</>
	);
};
