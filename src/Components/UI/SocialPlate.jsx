import { Github, Linkedin, Mail } from "lucide-react";

export const SocialPlate = () => {
	return (
		<>
			<div className="social-media-section">
				<a href="https://github.com/OctavioDNoval">
					<Github />
				</a>
				<a href="https://www.linkedin.com/in/octavio-noval-ab159230b/">
					<Linkedin />
				</a>
				<a href="">
					<Mail />
				</a>
			</div>
		</>
	);
};
