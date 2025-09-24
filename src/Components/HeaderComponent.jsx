import { useEffect, useState } from "react";
import { NamePlate } from "./UI/NamePlate";
import { NavBar } from "./UI/NavBar";
import { useMedia } from "../hooks/useMedia";
import { Menu } from "lucide-react";

export const HeaderComponent = ({ name, lastname }) => {
	const [scrolled, setScrolled] = useState(false);
	const [menuClicked, setMenuClicked] = useState(false);
	const { isMobile } = useMedia();

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
			{isMobile ? (
				<>
					<Menu
						color="var(--primary-color)"
						onClick={() => setMenuClicked(!menuClicked)}
					/>
					<NavBar isOpen={menuClicked} />
				</>
			) : (
				<NavBar isOpen={menuClicked} />
			)}
		</header>
	);
};
