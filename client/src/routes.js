import CollectorProfileComp from "./Components/collector/Profile";
import CollectorDashboard from "./Components/collector/Dashboard";
import PickupRequest from "./Components/collector/Request";
import UserLanding from "./Pages/UserLanding";

import UserProfileComp from "./Components/User/Profile";
import CollectionToday from "./Components/collector/CollectionToday";
import CollectionHistory from "./Components/collector/CollectorHistory";

export const userRoutes = [
  {
    name: "Home",
    path: "/user/",
    component: UserLanding,
  },
  {
    name: "Profile",
    path: "profile",
    component: UserProfileComp,
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
    name: "Collection Today",
    path: "pickups",
    component: CollectionToday,
  },
  {
    name : "History",
    path : "history",
    component : CollectionHistory
  }
  // {
  //   name: "Request",
  //   path: "request",
  //   component: RequestView,
  // },
  // {
  //   name: "Track Application",
  //   path: "track-application",
  //   component: "<div>Track Application</div>",
  // },
];
