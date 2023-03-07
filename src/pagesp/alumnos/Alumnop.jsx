import { Link, NavLink } from "react-router-dom";
function Alumnop() {
  return (
    <>
      <h1>Alumnos</h1>
      <Link to='/'>home</Link>
      <NavLink style={{color:'red'}}>Home</NavLink>
    </>
  );
}

export default Alumnop;                 
