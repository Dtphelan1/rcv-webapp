import SimulationPage from "./SimulationPage";
import AboutPage from "./AboutPage";

// Config file serving as a single point of truth for all application routes
const routes = [
  {
    path: "/",
    display: "Home",
    component: SimulationPage,
  },
  {
    path: "/about",
    display: "About",
    component: AboutPage,
  },
];

export { routes };
