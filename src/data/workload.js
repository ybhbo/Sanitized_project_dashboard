import OverviewImg from "../assets/img/pages/overview.jpg";
// import TransactionsImg from "../assets/img/pages/transactions.jpg";
import SettingsImg from "../assets/img/pages/settings.jpg";
import SignInImg from "../assets/img/pages/sign-in.jpg";
import SignUpImg from "../assets/img/pages/sign-up.jpg";
import LockImg from "../assets/img/pages/lock.jpg";
import ForgotPasswordImg from "../assets/img/pages/forgot-password.jpg";
import ResetPasswordImg from "../assets/img/pages/reset-password.jpg";
import NotFoundImg from "../assets/img/pages/404.jpg";
import ServerErrorImg from "../assets/img/pages/500.jpg";

import { Routes } from "../routes";


export default [
    {
        "id": 1,
        "name": "Workload",
        "image": OverviewImg,
        "workload":

            "link": Routes.DashboardOverview.path
    }
    {
        "id": 2,
        "name": "Battery",
        "image": OverviewImg,
        "percent":

            "link": Routes.DashboardOverview.path
    }
]