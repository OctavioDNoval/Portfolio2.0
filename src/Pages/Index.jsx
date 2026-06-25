import { ContactComponent } from "../Components/ContactComponent";
import { FooterComponnet } from "../Components/FooterComponnet";
import { HeaderComponent } from "../Components/HeaderComponent";
import { HomeComponent } from "../Components/HomeComponent";
import { ProjectsComponents } from "../Components/ProjectsComponents";
import { SkillsComponent } from "../Components/SkillsComponent";
import { useRevealObserver } from "../hooks/useRevealObserver";

export const Index = () => {
	const name = "Octavio";
	const lastname = "Noval";

	useRevealObserver();

	return (
		<div>
			<HeaderComponent name={name} lastname={lastname} />
			<main>
				<HomeComponent name={name} lastname={lastname} />
				<ProjectsComponents />
				<SkillsComponent />
				<ContactComponent />
				<FooterComponnet name={name} lastname={lastname} />
			</main>
		</div>
	);
};
