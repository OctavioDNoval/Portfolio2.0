import { useEffect, useState } from "react";
import { NamePlate } from "./UI/NamePlate";
import { NavBar } from "./UI/NavBar";
import { useMedia } from "../hooks/useMedia";
import { Menu, X } from "lucide-react";

export const HeaderComponent = ({ name, lastname }) => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const { isMobile } = useMedia();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 5);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!isMobile) {
			setMenuOpen(false);
		}
	}, [isMobile]);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<header className={scrolled ? "glass" : "solid"}>
			<NamePlate name={name} lastname={lastname} />

			{isMobile ? (
				<>
					<button
						className="menu-toggle"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{menuOpen ? (
							<X color="var(--primary-color)" size={28} />
						) : (
							<Menu color="var(--primary-color)" size={28} />
						)}
					</button>
					<NavBar isOpen={menuOpen} onClose={closeMenu} />
				</>
			) : (
				<NavBar isOpen={true} onClose={closeMenu} />
			)}
		</header>
	);
};
