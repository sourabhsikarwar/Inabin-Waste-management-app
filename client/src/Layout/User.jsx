import React from "react";
import { useParams } from "react-router-dom";
import { userRoutes } from "../routes";
import UserSidebar from "../Components/User/UserSidebar.jsx"


const UserLayout = () => {

    const [component, setComponent] = React.useState(null);

    const { page } = useParams();

    React.useEffect(() => {
        let user_type = localStorage.getItem("user_type");
        if (user_type !== "user") {
            window.location.href = "/login";
        }
        const route = userRoutes.find((route) => route.path === page);
        if (route) {
            setComponent(route.component);
        }
    }, []);

    return (
        <div className="w-screen">
            <UserSidebar />
            <div className="px-64 pt-16">
                <div className="ml-4">
                    {component}
                </div>
            </div>
        </div>
    )
}

export default UserLayout;