import { SignForm } from "../content/SignUp/SignForm";
import { LoginForm } from "../content/SignUp/LoginForm";

import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';


export function Login() {

    const [form, setForm] = useState(<LoginForm />)
    const [activeIndex, setActiveIndex] = useState(0);


    const items = [
        { label: 'Accedi', command: () => setForm(<LoginForm />) },
        { label: 'Iscriviti', command: () => setForm(<SignForm />)},
    ];


 

    return (
        <div className="card">
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            {form}
        </div>
    )
}