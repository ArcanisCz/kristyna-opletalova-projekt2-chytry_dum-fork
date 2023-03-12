import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import smartHomeData from "./smartHomeData";

export function cn(...classes) {
    const strings = classes.filter(item => typeof item === "string");
    return strings.join(" ");
}
const App = () => (
    <>
        <div className="container">
            <Header title="Chytrý dům"/>
            <Dashboard data={smartHomeData} />
        </div>
    </>
);

createRoot(
    document.querySelector('#app'),
).render(<App/>);