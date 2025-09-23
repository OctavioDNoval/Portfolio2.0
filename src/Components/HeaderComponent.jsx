import { useEffect, useState } from "react";
import { NamePlate } from "./UI/NamePlate";
import { NavBar } from "./UI/NavBar";

export const HeaderComponent = ({ name, lastname }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 5);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={scrolled ? "glass" : "solid"}>
			<NamePlate name={name} lastname={lastname} />
			<NavBar />
		</header>
	);
};
