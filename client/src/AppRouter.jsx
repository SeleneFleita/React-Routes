import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, Login, Dashboard, NotFount } from "./pages";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./components/PrivateRoutes";


export default function AppRouter (){
  return (
    <Suspense fallback ={<p>Cargando..</p>}>
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route path="/" element={<HomePage/> } />
          <Route path="/login" element={<Login/> } />

          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard/> } />
          </Route>
          <Route path="*" element={<NotFount/> } />

        </Routes>
      </BrowserRouter>
    </Suspense>
  )
   
  
}