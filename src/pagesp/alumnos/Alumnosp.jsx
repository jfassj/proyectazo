import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Grid, h } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useEffect, useRef } from "react";

function Alumnosp() {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const grid = new Grid({
    columns: [
      "Matricula",
      "Nombre",
      "Apellido Paterno",
      "Apellido Materno",
      "Carrera",
      "Fecha",
      "Hora",
      "Motivo",
      {
        name: "Modificar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-primary",
              onClick: () =>
                navigate(`/pedagogia/modificar/${row.cells[0].data}`),
            },
            "Modificar"
          );
        },
      },
      {
        name: "Eliminar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-danger",
              onClick: () => navigate(`/pedagogia/eliminar/${row.cells[0].data}`),
            },
            "Eliminar"
          );
        },
      },
    ],
    width: "auto",
    search: true,
    pagination: {
      enabled: true,
      limit: 5,
      summary: true,
    },
    sort: true,
    style: {
      th: {
        background: "#3047BD",
        color: "#fbf8f8",
        border: "3px solid #ccc",
        "text-allign": "center",
      },
    },
    autoWidth: true,
    language: {
      search: {
        placeholder: "🔍 Buscar...",
      },
      pagination: {
        previous: "⬅️",
        next: "➡️",
        showing: "😃 Mostrando",
        results: () => "registros",
      },
    },
    server: {
      url: "http://127.0.0.1:5000/pedagogia",
      then: (data) =>
        data.result.map((alumno) => [
          alumno.matricula,
          alumno.nombre,
          alumno.aPaterno,
          alumno.aMaterno,
          alumno.aCarrera,
          alumno.fecha,
          alumno.hora,
          alumno.motivo
        ]),
    },
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  return (
    <>
      <h1>Citas</h1>
      <div ref={wrapperRef} />
    </>
  );
}

export default Alumnosp;
