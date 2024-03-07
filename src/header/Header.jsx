import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import "../header/Navbar/Navbar.css";
import toggle_light from "../header/assets/day.png";
import toggle_dark from "../header/assets/night.png";
import search_dark from "../header/assets/search-b.png";
import search_light from "../header/assets/search-w.png";
import { useContext, useState } from "react";
import { PrimeReactContext } from "primereact/api";

export default function TemplateDemo() {
	const { changeTheme } = useContext(PrimeReactContext);
	const themes = ["bootstrap4-dark-purple", "bootstrap4-light-purple"];
	const [currentTheme, setCurrentTheme] = useState(themes[0]);

	function handleThemeChange() {
		if (currentTheme === "bootstrap4-dark-purple") {
			changeTheme(themes[0], themes[1], "app-theme");
			setCurrentTheme(themes[1]);
		} else {
			changeTheme(themes[1], themes[0], "app-theme");
			setCurrentTheme(themes[0]);
		}
	}
	const itemRenderer = (item) => (
		<a className="flex align-items-center p-menuitem-link">
			<span className={item.icon} />
			<span className="mx-2">{item.label}</span>
			{item.badge && <Badge className="ml-auto" value={item.badge} />}
			{item.shortcut && (
				<span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>
			)}
		</a>
	);
	const items = [
		{
			label: "Home",
			icon: "pi pi-home",
		},
		{
			label: "Novità",
			icon: "pi pi-star",
		},
		{
			label: "Piattaforme",
			icon: "pi pi-search",
			items: [
				{
					label: "Xbox Series X|S",
					icon: "pi pi-bolt",
					template: itemRenderer,
				},
				{
					label: "Playstation 5",
					icon: "pi pi-server",
					template: itemRenderer,
				},
				{
					label: "Nintendo Switch",
					icon: "pi pi-pencil",
					template: itemRenderer,
				},
				{
					label: "Pc Windows",
					icon: "pi pi-palette",
					template: itemRenderer,
				},
			],
		},
		{
			label: "Contatti",
			icon: "pi pi-envelope",
			badge: 3,
			template: itemRenderer,
		},
	];

	const start = (
		<img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>
	);
	const end = (
		<div className="flex align-items-center ">
			<img
				onClick={handleThemeChange}
				src={currentTheme === themes[1] ? toggle_light : toggle_dark}
				className="toggle-icon"
			/>

			<span className="p-input-icon-left">
				<i className="pi pi-search" />
				<InputText placeholder="Search" />
			</span>
		</div>
	);

	return (
		<div className="card">
			<Menubar model={items} start={start} end={end} />
		</div>
	);
}
