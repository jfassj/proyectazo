const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "proyectazo",
});


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});


app.post("/alumnot/agregar", (req, res) => {
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
  } = req.body;

  const sql = "insert into alumnos values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
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
      "default.jpg",
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});

app.get("/alumnost", (req, res) => {
  const sql = "select * from alumnos";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/alumnot/modificar", (req, res) => {
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
  } = req.body;

  const sql =
    "update alumnos set aPaterno=?, aMaterno=?, nombre=?, sexo=?, dCalle=?, dNumero=?, dColonia=?, dCodigoPostal=?, aTelefono=?, aCorreo=?, aFacebook=?, aInstagram=? where matricula=?";

  db.query(
    sql,
    [
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
      matricula,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});

app.post("/alumnot/eliminar", (req, res) => {
  const { matricula } = req.body;

  const sql = "delete from alumnos where matricula=?";

  db.query(sql, [matricula], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/alumnot/:matricula", (req, res) => {
  const matricula = req.params.matricula;

  const sqlGet = "select * from alumnos where matricula=?";
  db.query(sqlGet, [matricula], (err, result, fields) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});




//Empieza el CRUD de asesorias

app.post("/asesoria/agregar", (req, res) => {
  const {
    codigo,
    alumno,
    tema,
    observaciones,
    fecha,
    hora_inicio,
    hora_fin,
  } = req.body;

  const sql = "insert into asesorias values (?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
    codigo,
    alumno,
    tema,
    observaciones,
    fecha,
    hora_inicio,
    hora_fin,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});


app.get("/asesorias", (req, res) => {
  const sql = "select * from asesorias";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});


app.post("/asesoria/modificar", (req, res) => {
  const {
    codigo,
    alumno,
    tema,
    observaciones,
    fecha,
    hora_inicio,
    hora_fin,
  } = req.body;

  const sql =
    "update asesorias set alumno=?, tema=?, observaciones=?, fecha=?, hora_inicio=?, hora_fin=? where codigo=?";

  db.query(
    sql,
    [
      alumno,
      tema,
      observaciones,
      fecha,
      hora_inicio,
      hora_fin,
      codigo,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});


app.post("/asesoria/eliminar", (req, res) => {
  const { codigo } = req.body;

  const sql = "delete from asesorias where codigo=?";

  db.query(sql, [codigo], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/asesoria/:codigo", (req, res) => {
  const codigo = req.params.codigo;

  const sqlGet = "select * from asesorias where codigo=?";
  db.query(sqlGet, [codigo], (err, result, fields) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});



// Empieza el CRUD de registros

app.post("/registro/agregar", (req, res) => {
  const {
    id,
    alumno,
    fecha,
    tipo,
    acciones,
    estado,
  } = req.body;

  const sql = "insert into registros values (?,?,?,?,?,?)";
  db.query(
    sql,
    [
      id,
      alumno,
      fecha,
      tipo,
      acciones,
      estado,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});


app.get("/registros", (req, res) => {
  const sql = "select * from registros";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/registro/modificar", (req, res) => {
  const {
    id,
    alumno,
    fecha,
    tipo,
    acciones,
    estado,
  } = req.body;

  const sql =
    "update registros set alumno=?, fecha=?, tipo=?, acciones=?, estado=? where id=?";

  db.query(
    sql,
    [
      alumno,
      fecha,
      tipo,
      acciones,
      estado,
      id,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});


app.post("/registro/eliminar", (req, res) => {
  const { id } = req.body;

  const sql = "delete from registros where id=?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});


app.get("/registro/:id", (req, res) => {
  const id = req.params.id;

  const sqlGet = "select * from registros where id=?";
  db.query(sqlGet, [id], (err, result, fields) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/estadias/agregar", (req, res) => {
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
    aDocumento,
  } = req.body;

  const sql = "insert into estadias values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'buenasnoches.docx')";
  db.query(
    sql,
    [
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
      aDocumento,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});

app.get("/estadias", (req, res) => {
  const sql = "select * from estadias";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/estadias/modificar", (req, res) => {
  const {
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
    aDocumento,
    matricula,
  } = req.body;

  const sql =
    "update estadias set aPaterno=?, aMaterno=?, nombre=?, sexo=?, dCalle=?, dNumero=?, dColonia=?, dCodigoPostal=?, aTelefono=?, aCorreo=?, aFacebook=?, aInstagram=?, nombre_tutor=?, nombre_director=?, nombre_asesor=?, direccion_empresa=?, nombre_representante_empresa=?, correo_asesor=?, telefono_empresa=?, fecha_vinculacion=?, nombre_representante_vinculacion=?, aDocumento=? where matricula=?";
    console.log(nombre);
  db.query(
    sql,
    [
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
      'buenosdias.docx',
      matricula,
    ],
    (err, result) => {
      if (err) {
        return(
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        }))
      } 
      if(result.affectedRows > 0){
        return(
          res.send({
            status:200,
            result
          })
        )
      }else{
        return(
          res.send({
            status:201,
            result
          })
        )
      }
    }
  );
});

app.post("/estadias/eliminar", (req, res) => {
  const { matricula } = req.body;

  const sql = "delete from estadias where matricula=?";

  db.query(sql, [matricula], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/estadias/:matricula", (req, res) => {
  const matricula = req.params.matricula;

  const sqlGet = "select * from estadias where matricula=?";
  db.query(sqlGet, [matricula], (err, result, fields) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/pedagogia/agregar", (req, res) => {
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
  } = req.body;

  const sql = "insert into pedagogia values (?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
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
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});

app.get("/pedagogia", (req, res) => {
  const sql = "select * from pedagogia";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post("/pedagogia/modificar", (req, res) => {
  const {
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
    matricula,
  } = req.body;

  const sql =
    "update pedagogia set aPaterno=?, aMaterno=?, nombre=?, sexo=?, fecha=?, hora=?, motivo=?, aTelefono=?, aCorreo=?, aCarrera=? where matricula=?";

  db.query(
    sql,
    [
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
      matricula,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
          result,
        });
      }
    }
  );
});

app.post("/pedagogia/eliminar", (req, res) => {
  const { matricula } = req.body;

  const sql = "delete from pedagogia where matricula=?";

  db.query(sql, [matricula], (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.get("/pedagogia/:matricula", (req, res) => {
  const matricula = req.params.matricula;

  const sqlGet = "select * from pedagogia where matricula=?";
  db.query(sqlGet, [matricula], (err, result, fields) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.post('/ptc/agregar', (req, res)=>{
	const { id, nombre, act, fecha, participantes, lugar, obs } = req.body;
	const sql = "INSERT INTO ptc VALUES(?,?,?,?,?,?,?)";
	db.query(sql, [id, nombre, act, fecha, participantes, lugar, obs], (err,result)=>{
		if(err) {
			res.send({
				status:100,
				errNo: err.errno,
				mensaje: err.sqlMessage,
				codigo: err.code,
			});
		}else {
			res.send({
				status:200,
			})
		}
	});
});
app.get('/ptc', (req, res)=>{
	const sql = "SELECT * FROM ptc";
	db.query(sql, (err,result)=>{
		if(err) {
			res.send({
				status:100,
				errNo: err,
			});
		}else {
			res.send({
				status:200,
				result,
			})
		}
	});
});

app.post('/ptc/modificar', (req, res)=>{
	
	const {nombre, act, fecha, participantes, lugar, obs, id} = req.body;

	const sql = "UPDATE ptc SET nombre=?, act=?, fecha=?, participantes=?, lugar=?, obs=? WHERE id=?";
	db.query(sql, [nombre, act, fecha, participantes, lugar, obs, id], (err,result)=>{
		if(err) {
			res.send({
				status:100,
				errNo: err.errno,
				mensaje: err.sqlMessage,
				codigo: err.code,
			});
		}else {
			res.send({
				status:200,
				result,
			})
		}
	});

});

app.get('/ptc/:id',(req, res)=>{
	const id = req.params.id;

	const sqlGet = "SELECT * FROM ptc WHERE id=?";
	db.query(sqlGet, [id], (err, result, fields)=>{
		if(err){
			res.send({
				status:100,
				errNo: err.errno,
				mensaje: err.sqlMessage,
				codigo: err.code,
			});
		}else{
			res.send({
				status: 200,
				result,
			});
		}
	});

});

app.post('/ptc/eliminar', (req, res)=>{
	
	const { id } = req.body;

	const sql = "DELETE FROM ptc  WHERE id=?";
	db.query(sql, [id], (err,result)=>{
		if(err) {
			res.send({
				status:100,
				errNo: err.errno,
				mensaje: err.sqlMessage,
				codigo: err.code,
			});
		}else {
			res.send({
				status:200,
				result,
			})
		}
	});

});

app.post("/estudio/agregar", (req, res) => {
  console.log("aqui");
  const {
    nombre,
    edad,
    direccion,
    carrera,
    modalidad,
    eleccion,
    trabajas,
    horas,
    ingreso_mensua,
    egreso_mensua,
    casa,
    cuartos,
    personas,
    internet,
    computadora,
    refri,
    agua,
    drenado,
    electricidad,
    beca,
    ambiente,
    responsabilidades,
    discapacidad,
    secundaria,
    final_secu,
    prepa,
    especialidad,
    final_prepa,
    habitos,
    estudias,
    enfermedad,
    medicamento,
    tristeza,
    pesimismo,
    irritabilidad,
    retirada,
    indesicion,
    imagen_corporal,
    enlentecimiento,
    insomnio,
    peso,
    calor,
    temblor_piernas,
    temblor_manos,
    mareo,
  } = req.body;

  const sql = "INSERT INTO estudio VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      nombre,
      edad,
      direccion,
      carrera,
      modalidad,
      eleccion,
      trabajas,
      horas,
      ingreso_mensua,
      egreso_mensua,
      casa,
      cuartos,
      personas,
      internet,
      computadora,
      refri,
      agua,
      drenado,
      electricidad,
      beca,
      ambiente,
      responsabilidades,
      discapacidad,
      secundaria,
      final_secu,
      prepa,
      especialidad,
      final_prepa,
      habitos,
      estudias,
      enfermedad,
      medicamento,
      tristeza,
      pesimismo,
      irritabilidad,
      retirada,
      indesicion,
      imagen_corporal,
      enlentecimiento,
      insomnio,
      peso,
      calor,
      temblor_piernas,
      temblor_manos,
      mareo,
    ],
    (err, result) => {
      if (err) {
        res.send({
          status: 100,
          errNo: err.errno,
          mensaje: err.sqlMessage,
          codigo: err.code,
        });
      } else {
        res.send({
          status: 200,
        });
      }
    }
  );
});

app.get("/estudio", (req, res) => {
  const sql = "select * from estudio";
  db.query(sql, (err, result) => {
    if (err) {
      res.send({
        status: 100,
        errNo: err.errno,
        mensaje: err.sqlMessage,
        codigo: err.code,
      });
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
});