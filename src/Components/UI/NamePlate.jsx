import "./UI styles/UI.css";

export const NamePlate = ({ name, lastname }) => {
	return (
		<>
			<div className="name-plate">
				<div className="name-capital">
					{name
						.charAt(0)
						.toUpperCase()
						.concat(lastname.charAt(0).toUpperCase())}
				</div>
				<div className="name">{name.concat(" ").concat(lastname)}</div>
			</div>
		</>
	);
};
