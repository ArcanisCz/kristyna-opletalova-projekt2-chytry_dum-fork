import React from "react";
import Lights from "../Lights";

const Dashboard = ({data}) => {
    return (
        <main className="dashboard">
            <Lights lights={data.lights}/>
        </main>
    )
}

export default Dashboard;