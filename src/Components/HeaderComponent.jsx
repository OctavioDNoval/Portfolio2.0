import React from "react";
import { NamePlate } from "./UI/NamePlate";

export const HeaderComponent = ({ name, lastname }) => {
	return (
		<nav>
			<NamePlate name={name} lastname={lastname} />
		</nav>
	);
};
