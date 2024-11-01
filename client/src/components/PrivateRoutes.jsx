
import { Navigate, Outlet } from 'react-router-dom'
import {useSession} from "../context/SessionProvider"


export default function PrivateRoutes() {


   const {user} = useSession()

   if (user == undefined){
      return <p>Cargando..</p>
   }
   return user ?  <Outlet/> : <Navigate to="/login"/>

}
