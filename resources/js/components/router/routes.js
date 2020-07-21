import home from "../view/home.vue";
import employee from "../view/employee.vue";
import department from "../view/department.vue";
import major from "../view/major.vue";
const routes = [
    {
        path: "/",
        component: home
    },
    {
        path: "/employee",
        component: employee
    },
    {
        path: "/department",
        component: department
    },
    {
        path: "/major",
        component: major
    }
];
export default routes;
