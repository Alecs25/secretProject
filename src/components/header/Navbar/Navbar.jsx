import { Menubar } from "primereact/menubar";
import { Badge } from "primereact/badge";
import toggle_light from "../assets/day.png";
import toggle_dark from "../assets/night.png";
import { useContext, useState } from "react";
import { PrimeReactContext } from "primereact/api";
import { Image } from "primereact/image";
import { Link, useNavigate } from "react-router-dom";
import { LoginModal } from "../../SignUp/loginModal";
import { LoginForm } from "../../SignUp/LoginForm";
import "./Navbar.css"
import Logo from "../assets/logoIcon.png"
export function Navbar() {
	const [showModal, setShowModal] = useState(false); // per gestire i forms Accedi e Iscriviti con un Modal
	const { changeTheme } = useContext(PrimeReactContext);
	const themes = ["bootstrap4-dark-purple", "bootstrap4-light-purple"];
	const [currentTheme, setCurrentTheme] = useState(themes[0]);
	const navigate = useNavigate();

	let indexN = 0;

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
			id: indexN++,
			command: () => navigate("/"),
		},
		{
			label: "Pannello Admin",
			icon: "pi pi-wrench",
			id: indexN++,
			items: [
				{
					label: "Articoli Admin",
					icon: "pi pi-wrench",
					id: indexN++,
					command: () => navigate("/articlemanager"),
				},
				{
					label: "Nuovo Articolo Admin",
					icon: "pi pi-wrench",
					id: indexN++,
					command: () => navigate("/createarticle"),
				},
			],
		},

		{
			label: "Piattaforme",
			icon: "pi pi-search",
			id: indexN++,
			items: [
				{
		 			label: "Xbox Series X|S",
					id: indexN++,
					template: itemRenderer,
					command: () => navigate("/Xbox"),
				},
				{
					label: "Playstation 5",
					id: indexN++,
					template: itemRenderer,
					command: () => navigate("/PlayStation"),
				},
				{
					label: "Nintendo Switch",
					id: indexN++,
					template: itemRenderer,
					command: () => navigate("/Nintendo"),
				},
				{
					label: "Pc Windows",
					id: indexN++,
					template: itemRenderer,
					command: () => navigate("/PCWindows"),
				},
			],
		},
	];

	const start = (
		<Link to="/">
		<img alt="logo" src={Logo} height="40" className="mr-2 navbarLogo"></img>
		</Link>
	);
	const end = (
		<div className="flex align-items-center gap-2 ">
			<Image
				onClick={handleThemeChange}
				width="32px"
				src={currentTheme === themes[0] ? toggle_light : toggle_dark}
				className="toggle-icon navbarLogo"
			/>

			{/* <span className="p-input-icon-left">
				<i className="pi pi-search" />
				<InputText placeholder="Search" />
			</span> */}
			 {!loginStatus &&  <button onClick={() => setShowModal(true)} className="p-button font-regular">
				Accedi
			</button>}
			{loginStatus && <div className="flex gap-3">
					<button className="p-button font-regular">Disconnettiti</button>
							<Link to="/profilo">
								<button className="p-button font-regular">Profilo</button>
							</Link>
							</div>
			}
		</div>
	);

	return (
		<div className="card">
			<LoginModal isVisible={showModal} onClose={() => setShowModal(false)}>
				<LoginForm />
			</LoginModal>
			<Menubar model={items.map(e=>{
				if(permission === "admin"){
					return e 
				}else if (permission === "user" && e.label=== "Pannello Admin"){
					return e={}
				}
				return e
			})} start={start} end={end} />
		</div>
	);
}
