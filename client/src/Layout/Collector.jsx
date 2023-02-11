import React from "react";
import { useParams } from "react-router-dom";
import { collectorRoutes } from "../routes";
import CollectorSidebar from "../Components/Collector/CollectorSidebar.jsx"


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
        <div className="w-screen">
            <CollectorSidebar />
            <div className="px-64 py-8">
                <div className="px-4">
                    {component}
                </div>
            </div>
        </div>
    )
}

export default CollectorLayout;