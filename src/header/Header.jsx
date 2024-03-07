import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import "../header/Navbar/Navbar.css"
import toggle_light from "../header/assets/day.png"
 import toggle_dark from "../header/assets/night.png"
 import search_dark from "../header/assets/search-b.png"
 import search_light from "../header/assets/search-w.png"
export default function TemplateDemo({theme, setTheme}) {
	const toggle_mode=()=>{
        theme == "dark" ? setTheme("light") : setTheme("dark")
    }
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Novità',
            icon: 'pi pi-star'
        },
        {
            label: 'Piattaforme',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Xbox Series X|S',
                    icon: 'pi pi-bolt',
                    template: itemRenderer
                },
                {
                    label: 'Playstation 5',
                    icon: 'pi pi-server',
                    template: itemRenderer
                },
                {
                    label: 'Nintendo Switch',
                    icon: 'pi pi-pencil',
                    template: itemRenderer
                },
                {
                    label: 'Pc Windows',
                    icon: 'pi pi-palette',
					template:itemRenderer
                }
            ]
        },
        {
            label: 'Contatti',
            icon: 'pi pi-envelope',
            badge: 3,
            template: itemRenderer
        }
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center ">
			<img onClick={()=>{toggle_mode()}}src={theme == "dark" ? toggle_light : toggle_dark} className="toggle-icon" />
			<div className='navSearch'>
            <input type="text" placeholder='Cerca' />
			<img src={theme == "dark" ? search_dark : search_light} alt="" />
			</div>
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}

