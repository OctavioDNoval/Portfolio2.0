import { useEffect, useState } from "react";
import { NamePlate } from "./UI/NamePlate";
import { NavBar } from "./UI/NavBar";
import { useMedia } from "../hooks/useMedia";
import { Menu, X } from "lucide-react";

export const HeaderComponent = ({ name, lastname }) => {
	const [scrolled, setScrolled] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);
	const { isMobile } = useMedia();

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setScrolled(scrollTop > 5);

			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
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
			<div className="header-inner">
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
			</div>
			<div
				className="scroll-progress"
				style={{ width: `${scrollProgress}%` }}
			/>
		</header>
	);
};
