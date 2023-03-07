import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import axios from "axios";

const initialState = {
  matricula: "",
  aPaterno: "",
  aMaterno: "",
  nombre: "",
  sexo: "",
  fecha: "",
  hora: "",
  motivo: "",
  aTelefono: "",
  aCorreo: "",
  aCarrera: "",
};

function AlumnoAgregarp() {
  const [alumno, setAlumno] = useState(initialState);
  const {
    matricula,
    aPaterno,
    aMaterno,
    nombre,
    sexo,
    fecha,
    hora,
    motivo,
    aTelefono,
    aCorreo,
    aCarrera,
  } = alumno;

  const handleInputChangep = (e) => {
    let { name, value } = e.target;
    setAlumno({ ...alumno, [name]: value });
  };

  const handleSubmitp = (event) => {
    event.preventDefault();
    addAlumnop(alumno);
  };

  const addAlumnop = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/pedagogia/agregar",
      data
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Agendar Cita</h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmitp}>
          <Row>
            <Col>
              <p className="fs-3">Datos Personales</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Matricula">
                <Form.Control
                  name="matricula"
                  type="text"
                  placeholder="Ingresa la matricula"
                  value={matricula}
                  onChange={handleInputChangep}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Nombre">
                <Form.Control
                  name="nombre"
                  type="text"
                  placeholder="Ingresa nombre"
                  value={nombre}
                  onChange={handleInputChangep}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Apellido Paterno">
                <Form.Control
                  name="aPaterno"
                  type="text"
                  placeholder="Ingresa Apellido paterno"
                  value={aPaterno}
                  onChange={handleInputChangep}
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Apellido Materno">
                <Form.Control
                  name="aMaterno"
                  type="text"
                  placeholder="Ingresa Apellido materno"
                  value={aMaterno}
                  onChange={handleInputChangep}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Select
                name="sexo"
                aria-label="Default select example"
                value={sexo}
                onChange={handleInputChangep}
                required
              >
                <option>Selecciona tu sexo</option>

                <option value="1">Femenino</option>

                <option value="2">Masculino</option>
              </Form.Select>
            </Col>

            <Col>
              <FloatingLabel label="Teléfono">
                {" "}
                <Form.Control
                  name="aTelefono"
                  type="text"
                  placeholder="Ingresa Teléfono (618)1232323"
                  value={aTelefono}
                  onChange={handleInputChangep}
                  pattern="[(][0-9]{3}[)][0-9]{7}"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Correo Electrónico">
                <Form.Control
                  name="aCorreo"
                  type="email"
                  placeholder="Ingresa Correo electronico"
                  value={aCorreo}
                  onChange={handleInputChangep}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Carrera">
                <Form.Control
                  name="aCarrera"
                  type="text"
                  placeholder="Ingresar la Carrera"
                  value={aCarrera}
                  onChange={handleInputChangep}
                  required
                />
              </FloatingLabel>
            </Col>

          </Row>


          <Row className="mt-3 mb-3">
            <Col>
              <p className="fs-3">Cita</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Fecha">
                <Form.Control
                  name="fecha"
                  type="date"
                  placeholder="Ingresa la Fecha"
                  value={fecha}
                  onChange={handleInputChangep}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label="Hora">
                <Form.Control
                  name="hora"
                  type="time"
                  placeholder="Ingresa la Hora de la Cita"
                  value={hora}
                  onChange={handleInputChangep}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">


            <Col>
              <FloatingLabel label="Motivo">
                <Form.Control
                  name="motivo"
                  type="text"
                  placeholder="Ingresa el Motivo"
                  value={motivo}
                  onChange={handleInputChangep}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit" className="btn btn-primary">
                Guardar
              </Button>
            </Col>

            <Col>
              <Button className="btn btn-danger">Cancelar</Button>
            </Col>
          </Row>

        </Form>
      </Container>
    </>
  );
}

export default AlumnoAgregarp;
