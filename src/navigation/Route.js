import Login from "../pages/auth/LoginPage";
import PlanPage from "../pages/plan/Dashboard";

const Routes = [
  {
    path: "/",
    name: "login",
    exact: true,
    pageTitle: "Login",
    component: Login,
  },
  {
    path: "/plan",
    name: "",
    exact: true,
    pageTitle: "",
    component: PlanPage,
  },
];

export default Routes;
