import { HeaderComponent } from "../Components/HeaderComponent";
import { HomeComponent } from "../Components/HomeComponent";

export const Index = () => {
	const name = "Octavio";
	const lastname = "Noval";

	return (
		<div>
			<HeaderComponent name={name} lastname={lastname} />
			<main>
				<HomeComponent />
			</main>
		</div>
	);
};
