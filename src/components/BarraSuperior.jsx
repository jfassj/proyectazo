import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from "react-router-dom";

function BarraSuperior() {
	return ( 
		<>
			<Navbar bg="success" expand="lg">
				<Container>
					<Navbar.Brand as={ Link } to='/' >UTD</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={ Link } to='/'>Inicio</Nav.Link>
							<NavDropdown title="Alumnos" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='alumnost'>Alumnos</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='alumnost/agregar'>Agregar</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='alumnost/eliminar'>Eliminar</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='alumnost/modificar'>Modificar</NavDropdown.Item>

							</NavDropdown>

							<NavDropdown title="Asesorias" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='asesorias'>Asesorias</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='asesorias/agregar'>Agregar</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='asesorias/eliminar'>Eliminar</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='asesorias/modificar'>Modificar</NavDropdown.Item>

							</NavDropdown>

							<NavDropdown title="Tutorias" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='registros'>Registros</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='registros/agregar'>Agregar</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='registros/eliminar'>Eliminar</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='registros/modificar'>Modificar</NavDropdown.Item>

							</NavDropdown>
							<NavDropdown title="Pedagogia" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='pedagogia'>Citas</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='pedagogia/agregar'>Agendar cita</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Estadias" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='estadias'>Estadia</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='estadias/agregar'>Agregar Estadia</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='estadias/eliminar'>Eliminar Estadia</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='estadias/modificar'>Modificar Estadia</NavDropdown.Item>

							</NavDropdown>
							<NavDropdown title="Actividades PTC" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='ptc'>PTC</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='ptc/agregar'>Agregar</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='ptc/eliminar'>Eliminar</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='ptc/modificar'>Modificar</NavDropdown.Item>

							</NavDropdown>
							<NavDropdown title="Estudio" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='estudio'>Estudios</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='estudio/agregar'>Agregar Estudio</NavDropdown.Item>
							</NavDropdown>
						</Nav>

					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div>
				<Outlet></Outlet>
			</div>
		</>
	 );
}

export default BarraSuperior;