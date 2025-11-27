import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Index } from "./Pages/Index.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Index />
	</StrictMode>
);
