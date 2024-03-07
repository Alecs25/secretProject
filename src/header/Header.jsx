import { Menubar } from "primereact/menubar";
import { PrimeReactContext } from "primereact/api";
import { useContext, useState } from "react";
export function Header() {
	const { changeTheme } = useContext(PrimeReactContext);
	const themes = ["bootstrap4-dark-purple", "mdc-light-indigo"];
	const [currentTheme, setCurrentTheme] = useState(themes[0]);

	function handleThemeChange() {
		if (currentTheme === "bootstrap4-dark-purple") {
			changeTheme(themes[0], themes[1], "app-theme");
			setCurrentTheme(themes[1]);
		} else {
			changeTheme(themes[1], themes[0], "app-theme");
			setCurrentTheme(themes[0]);
			console.log();
		}
	}

	const items = [
		{
			label: "Home",
			icon: "pi pi-home",
			id: 1,
		},
		{
			label: "News",
			icon: "pi pi-star",
			id: 2,
		},
		{
			label: "Console",
			icon: "pi pi-envelope",
			id: 3,
		},
		{
			label: "Accedi",
			icon: "pi pi-envelope",
			id: 4,
		},
	];
	return (
		<div className="pb-5">
			<button onClick={handleThemeChange}>cambia tema</button>
			<Menubar model={items} />
		</div>
	);
}
