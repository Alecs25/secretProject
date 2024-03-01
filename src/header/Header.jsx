import { Menubar } from "primereact/menubar";

export function Header() {
	const items = [
		{
			label: "Home",
			icon: "pi pi-home",
			id: 8,
		},
		{
			label: "Features",
			icon: "pi pi-star",
			id: 9,
		},
		{
			label: "Projects",
			icon: "pi pi-search",
			id: 10,
			items: [
				{
					label: "Components",
					icon: "pi pi-bolt",
					id: 1,
				},
				{
					label: "Blocks",
					icon: "pi pi-server",
					id: 2,
				},
				{
					label: "UI Kit",
					icon: "pi pi-pencil",
					id: 3,
				},
				{
					label: "Templates",
					icon: "pi pi-palette",
					id: 4,
					items: [
						{
							label: "Apollo",
							icon: "pi pi-palette",
							id: 5,
						},
						{
							label: "Ultima",
							icon: "pi pi-palette",
							id: 6,
						},
					],
				},
			],
		},
		{
			label: "Contact",
			icon: "pi pi-envelope",
			id: 7,
		},
	];

	return (
		<div className="pb-5">
			<Menubar model={items} />
		</div>
	);
}
