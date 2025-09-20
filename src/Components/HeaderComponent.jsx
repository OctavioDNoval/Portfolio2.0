import { NamePlate } from "./UI/NamePlate";
import { NavBar } from "./UI/NavBar";

export const HeaderComponent = ({ name, lastname }) => {
	return (
		<header>
			<NamePlate name={name} lastname={lastname} />
			<NavBar />
		</header>
	);
};
