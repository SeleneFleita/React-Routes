
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div style={{
        display:"flex",
        flexDirection: "row",
        gap:"6px"
    }}>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}
