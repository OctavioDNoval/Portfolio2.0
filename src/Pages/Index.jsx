import { ContactComponent } from "../Components/ContactComponent";
import { HeaderComponent } from "../Components/HeaderComponent";
import { HomeComponent } from "../Components/HomeComponent";
import { ProjectsComponents } from "../Components/ProjectsComponents";
import { SkillsComponent } from "../Components/SkillsComponent";

export const Index = () => {
	const name = "Octavio";
	const lastname = "Noval";

	return (
		<div>
			<HeaderComponent name={name} lastname={lastname} />
			<main>
				<HomeComponent name={name} lastname={lastname} />
				<ProjectsComponents />
				<SkillsComponent />
				<ContactComponent />
			</main>
		</div>
	);
};
