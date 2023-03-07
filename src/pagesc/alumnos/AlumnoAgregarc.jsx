import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  id:'',
  nombre:'',
  act:'',
  fecha:'',
  participantes:'',
  lugar:'',
  obs:'',
 
}

function AlumnoAgregarc() {

  const [alumno, setAlumno] = useState(initialState);
  const {id, nombre, act, fecha, participantes, lugar, obs } = alumno;
  const notify = () => toast("Se agrego correctamente!");
  
  const handleInputChangec = (e) => {
      let { name, value } = e.target;
      setAlumno({...alumno, [name]:value});
  }
  const handleSubmitc = (event) => {
    event.preventDefault();
    addAlumnoc(alumno);
  }
  const addAlumnoc = async (data) => {
    const response = await axios.post("http://localhost:5000/ptc/agregar", data);
    if(response.status === 200) {
      console.log(response.data);
    }
  }
  

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>PTC agregar</h1>
          </Col>
        </Row>

        <Form onSubmit={ handleSubmitc }>
          <Row>
            <Col>
              <p className="fs-3">Datos generales</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="id">
                <Form.Control
                  name="id"
                  type="text"
                  value={ id }
                  disabled
                />
              </FloatingLabel>
            </Col>

            <Col>
              <Form.Control
                name="nombre"
                type="text"
                placeholder="Ingresa nombre"
                value = { nombre }
                onChange = { handleInputChangec }
                required
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="act"
                type="text"
                placeholder="Ingresa la actividad"
                value={ act }
                onChange = { handleInputChangec }
              />
            </Col>

            <Col>
              <Form.Control
                name="fecha"
                type="date"
                placeholder="Ingresa la fecha"
                value={ fecha }
                onChange = { handleInputChangec }
              />
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="participantes"
                type="text"
                placeholder="Ingresa a los participantes"
                value={ participantes }
                onChange = { handleInputChangec }
                required
              />
            </Col>

            <Col>
              <Form.Control
                name="lugar"
                type="text"
                placeholder="Ingresa el lugar"
                value={ lugar }
                onChange = { handleInputChangec }
                required
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="obs"
                type="text"
                placeholder="Ingresa las observaciones"
                value={ obs }
                onChange = { handleInputChangec }
                required
              />
            </Col>

            <Col></Col>
          </Row>

      

          <Row>
            <Col>
              <Button type="submit" onClick={notify} className="btn btn-primary">
                Guardar
              </Button>
              <ToastContainer />
            </Col>

            <Col>
              <Button className="btn btn-info">Cancelar</Button>
            </Col>
          </Row>

          {/* <Row className='mt-3 mb-3'>

                                               <Col></Col>

                                               <Col></Col>

                               </Row> */}
        </Form>
      </Container>
    </>
  );
}

export default AlumnoAgregarc;
