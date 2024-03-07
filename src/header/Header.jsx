import { Navbar } from "./Navbar/Navbar";

export function Header() {
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
		<Navbar/>
	);
}

