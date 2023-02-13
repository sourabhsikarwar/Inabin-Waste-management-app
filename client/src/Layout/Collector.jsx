import React from "react";
import { useParams } from "react-router-dom";
import { collectorRoutes } from "../routes";
import Sidebar from "../Components/collector/Sidebar";
import Navbar from "../Components/collector/Navbar";

const CollectorLayout = () => {
  const [component, setComponent] = React.useState(null);

  const { page } = useParams();

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
      <Navbar />
      <div className="w-screen flex container max-w-7xl mx-auto py-6">
        <div className="hidden md:block w-1/5">
          <Sidebar />
        </div>
        <div className="text-left  w-full md:w-4/5">
          <div className="px-6">{component}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectorLayout;
