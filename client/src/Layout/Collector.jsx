import React from "react";
import { useParams } from "react-router-dom";
import { collectorRoutes } from "../routes";
import Sidebar from "../Components/Collector/Sidebar.jsx"
import Navbar from "../Components/collector/Navbar";


const CollectorLayout = () => {

    const [component, setComponent] = React.useState(null);

    const { page, id } = useParams();

    React.useEffect(() => {
        let user_type = localStorage.getItem("user_type");
        if (user_type !== "collector") {
            window.location.href = "/login";
        }
        const route = collectorRoutes.find((route) => route.path === page);
        if (route) {
            setComponent(route.component);
        }
    }, []);

    return (
        <div>
            <Navbar/>
        <div className="w-screen flex container max-w-7xl mx-auto">
            <Sidebar />
            <div className="py-8 text-left w-full">
                <div className="px-4">
                    {component}
                </div>
            </div>
        </div></div>
    )
}

export default CollectorLayout;