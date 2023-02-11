import CollectorProfileComp from "./Components/collector/Profile";
import CollectorDashboard from "./Components/collector/Dashboard.jsx";
import PickupRequest from "./Components/collector/Request";

import UserProfileComp from "./Components/user/Profile.jsx";

export const userRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    component: "<div>Dashboard</div>",
  },
  {
    name: "Profile",
    path: "profile",
    component: UserProfileComp,
  },
  {
    name: "Request Pickup",
    path: "request-pickup",
    component: "<div>Request Pickup</div>",
  },
  {
    name: "Track Application",
    path: "track-application",
    component: "<div>Track Application</div>",
  },
];

export const collectorRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    component: CollectorDashboard,
  },
  {
    name: "Profile",
    path: "profile",
    component: CollectorProfileComp,
  },
  {
    name: "Request Pickup",
    path: "request-pickup",
    component: PickupRequest,
  },
  {
    name: "Track Application",
    path: "track-application",
    component: "<div>Track Application</div>",
  },
];
