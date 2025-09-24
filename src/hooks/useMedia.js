import React, { useEffect, useState } from "react";

export const useMedia = (breakpoint = 760) => {
	/**
	 * Usamos un estado para setear si es mobile o no, en caso de que el valor
	 * del breakpoint que viene por default en 760 sea mayor que el width
	 * de la pantalla quiere decir que esta en mobile, entonces el estado devuelve
	 * true
	 *
	 * Cuando se monta el componente se le da a la pantalla un eventListener,
	 * que cuando se haga un 'resize' se sobreescriba el estado del Hook para
	 * vovler a verificar si seguimos en mobile o no
	 *
	 * El retorno del hook, devuelve dos booleanos que son opuestos
	 */
	const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < breakpoint);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);

	return {
		isMobile,
		isDesktop: !isMobile,
	};
};
