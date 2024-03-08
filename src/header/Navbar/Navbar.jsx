import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import toggle_light from "../assets/day.png";
import toggle_dark from "../assets/night.png";
import { useContext, useState } from "react";
import { PrimeReactContext } from "primereact/api";
import { Image } from "primereact/image";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

export function Navbar() {
	const { changeTheme } = useContext(PrimeReactContext);
	const themes = ["bootstrap4-dark-purple", "bootstrap4-light-purple"];
	const [currentTheme, setCurrentTheme] = useState(themes[0]);
	const navigate = useNavigate();

	function handleThemeChange() {
		if (currentTheme === "bootstrap4-dark-purple") {
			changeTheme(themes[0], themes[1], "app-theme");
			setCurrentTheme(() => themes[1]);
		} else {
			changeTheme(themes[1], themes[0], "app-theme");
			setCurrentTheme(() => themes[0]);
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
			id: 1,
			command: () => navigate("/"),
		},
		{
			label: "Novità",
			icon: "pi pi-star",
			id: 2,
			command: () => navigate("/product"),
		},
		{
			label: "Piattaforme",
			icon: "pi pi-search",
			id: 3,
			items: [
				{
					label: "Xbox Series X|S",
					icon: "pi pi-bolt",
					id: 1,
					template: itemRenderer,
				},
				{
					label: "Playstation 5",
					icon: "pi pi-server",
					id: 2,
					template: itemRenderer,
				},
				{
					label: "Nintendo Switch",
					icon: "pi pi-pencil",
					id: 3,
					template: itemRenderer,
				},
				{
					label: "Pc Windows",
					icon: "pi pi-palette",
					id: 4,
					template: itemRenderer,
				},
			],
		},
		{
			label: "Contatti",
			icon: "pi pi-envelope",
			badge: 3,
			id: 4,
			template: itemRenderer,
		},
	];

	const start = (
		<img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>
	);
	const end = (
		<div className="flex align-items-center gap-2 ">
			<Image
				onClick={handleThemeChange}
				width="32px"
				src={currentTheme === themes[0] ? toggle_light : toggle_dark}
				className="toggle-icon"
			/>

			<span className="p-input-icon-left">
				<i className="pi pi-search" />
				<InputText placeholder="Search" />
			</span>

			<a href="/login" target="_blank" rel="noopener noreferrer" className="p-button font-regular" style={{textDecoration: "none"}}>
                Accedi
            </a>

		</div>
	);

	return (
		<div className="card">
			<Menubar model={items} start={start} end={end} />
		</div>
	);
}
