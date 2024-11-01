import { lazy } from "react"
export const HomePage= lazy(() => import ("./Home"))
export const Login = lazy(() => import ("./Login"))
export const Dashboard = lazy(() => import ("./Dashboard"))
export const NotFount = lazy(() => import ("./NotFount"))