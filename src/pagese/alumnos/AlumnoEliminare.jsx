import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  matricula: "",
  aPaterno: "",
  aMaterno: "",
  nombre: "",
  sexo: "",
  dCalle: "",
  dNumero: "",
  dColonia: "",
  dCodigoPostal: "",
  aTelefono: "",
  aCorreo: "",
  aFacebook: "",
  aInstagram: "",
  nombre_tutor: "",
  nombre_director: "",
  nombre_asesor: "",
  direccion_empresa: "",
  nombre_representante_empresa: "",
  correo_asesor: "",
  telefono_empresa: "",
  fecha_vinculacion: "",
  nombre_representante_vinculacion: "",
};

function AlumnoEliminare() {
  const [alumno, setAlumno] = useState(initialState);
  const {
    matricula,
    aPaterno,
    aMaterno,
    nombre,
    sexo,
    dCalle,
    dNumero,
    dColonia,
    dCodigoPostal,
    aTelefono,
    aCorreo,
    aFacebook,
    aInstagram,
    nombre_tutor,
    nombre_director,
    nombre_asesor,
    direccion_empresa,
    nombre_representante_empresa,
    correo_asesor,
    telefono_empresa,
    fecha_vinculacion,
    nombre_representante_vinculacion,
  } = alumno;

  const { m } = useParams();

  useEffect(() => {
    if (m) {
      getAlumnoe(m);
    }
  }, []);

  const getAlumnoe = async (m) => {
    const response = await axios.get(`http://127.0.0.1:5000/estadias/${m}`);

    if (response.status === 200) {
      setAlumno(response.data.result[0]);
    }
  };

  const handleSubmite = (event) => {
    event.preventDefault();
    deleteAlumnoe(alumno);
  };

  const deleteAlumnoe = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/estadias/eliminar",
      data
    );
    if (response.status === 200) {
      console.log(response.data);
    }
  };

  const showToastMessage = () => {
    toast.error("A Eliminado el Registro !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Eliminar memoria de Estadia</h1>
          </Col>
        </Row>

        <Form onSubmit={handleSubmite}>
          <Row>
            <Col>
              <p className="fs-3">Datos generales</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Matricula">
                <Form.Control
                  name="matricula"
                  type="text"
                  placeholder="Ingresa la matricula"
                  defaultValue={matricula}
                  required
                  disabled
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
                  placeholder="Ingresa Telefono (618)1232323"
                  value={aTelefono}
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
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Facebook">
                <Form.Control
                  name="aFacebook"
                  type="text"
                  placeholder="Ingresa perfil Facebook"
                  value={aFacebook}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Instagram">
                <Form.Control
                  name="aInstagram"
                  type="text"
                  placeholder="Ingresa perfil Instagram"
                  value={aInstagram}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col></Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="fs-3">Dirección</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Calle">
                <Form.Control
                  name="dCalle"
                  type="text"
                  placeholder="Ingresa la calle"
                  value={dCalle}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Número de Casa">
                <Form.Control
                  name="dNumero"
                  type="number"
                  placeholder="Ingresa el numero"
                  value={dNumero}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Colonia">
                <Form.Control
                  name="dColonia"
                  type="text"
                  placeholder="Ingresa la colonia"
                  value={dColonia}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Código Postal">
                <Form.Control
                  name="dCodigoPostal"
                  type="number"
                  placeholder="Ingresa el código postal"
                  value={dCodigoPostal}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Subir archivo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="fs-3">
                Datos Generales del parte de personal administrativo
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="nombre del tutor">
                <Form.Control
                  name="nombre_tutor"
                  type="text"
                  placeholder="Ingresa el nombre de tu tutor"
                  value={nombre_tutor}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="nombre del director ">
                <Form.Control
                  name="nombre_director"
                  type="text"
                  placeholder="Ingresa el nombre del director de la carrera"
                  value={nombre_director}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="fs-3">Datos Generales del la empresa</p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="nombre del asesor de la empresa">
                <Form.Control
                  name="nombre_asesor"
                  type="text"
                  placeholder="Ingresa el nombre de tu asesor"
                  value={nombre_asesor}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Direccion de la empresa ">
                <Form.Control
                  name="direccion_empresa"
                  type="text"
                  placeholder="Ingresa la Direccion de la empresa "
                  value={direccion_empresa}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="nombre del representante">
                <Form.Control
                  name="nombre_representante_empresa"
                  type="text"
                  placeholder="Ingresa el nombre del representrante de la empresa "
                  value={nombre_representante_empresa}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Correo del asesor">
                <Form.Control
                  name="correo_asesor"
                  type="text"
                  placeholder="Ingresa el correo de tu asesor"
                  value={correo_asesor}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Teléfono de la empresa">
                {" "}
                <Form.Control
                  name="telefono_empresa"
                  type="text"
                  placeholder="Ingresa Telefono (618)1232323"
                  value={telefono_empresa}
                  pattern="[(][0-9]{3}[)][0-9]{7}"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <p className="fs-3">Vinculacion</p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Fecha de vinculacion">
                <Form.Control
                  name="fecha_vinculacion"
                  type="text"
                  placeholder="Ingresa la Fecha de vinculacion"
                  value={fecha_vinculacion}
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Nombre del responsable de vinculacion">
                <Form.Control
                  name="nombre_representante_vinculacion"
                  type="text"
                  placeholder="Ingresa el Nombre del responsable de vinculacion"
                  value={nombre_representante_vinculacion}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                type="submit"
                className="btn btn-danger"
                onClick={showToastMessage}
              >
                Eliminar
                <ToastContainer />
              </Button>
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

export default AlumnoEliminare;
