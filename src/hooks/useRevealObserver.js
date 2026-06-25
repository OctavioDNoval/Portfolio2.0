import { useEffect } from "react";

export const useRevealObserver = () => {
	useEffect(() => {
		const elements = document.querySelectorAll("[data-reveal]");
		if (!elements.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("reveal-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);
};
