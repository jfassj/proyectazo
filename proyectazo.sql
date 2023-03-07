-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-03-2023 a las 04:27:13
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectazo`
--
CREATE DATABASE IF NOT EXISTS `proyectazo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `proyectazo`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `matricula` varchar(10) NOT NULL,
  `aPaterno` varchar(255) NOT NULL,
  `aMaterno` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `sexo` tinyint(4) NOT NULL,
  `dCalle` varchar(255) NOT NULL,
  `dNumero` int(11) NOT NULL,
  `dColonia` varchar(255) NOT NULL,
  `dCodigoPostal` int(11) NOT NULL,
  `aTelefono` varchar(12) NOT NULL,
  `aCorreo` varchar(255) NOT NULL,
  `aFacebook` varchar(255) NOT NULL,
  `aInstagram` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`matricula`, `aPaterno`, `aMaterno`, `nombre`, `sexo`, `dCalle`, `dNumero`, `dColonia`, `dCodigoPostal`, `aTelefono`, `aCorreo`, `aFacebook`, `aInstagram`, `foto`) VALUES
('3041210015', 'Portilla', 'Cardenas', 'Jared', 2, 'Fairgrounds RD', 655, 'Circuito Interior', 34166, '(618)3046186', 'jaredpor36@gmail.com', 'Jared36 PC', 'Jared PC', 'default.jpg'),
('3465444645', 'Portilla', 'Carrillo', 'Emeli', 2, 'Fairgrounds RD', 521, 'Circuito Interior', 34166, '(618)3046186', 'jaredpor36@gmail.com', 'Jared PC', 'Jared PC', 'default.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asesorias`
--

CREATE TABLE `asesorias` (
  `codigo` varchar(11) NOT NULL,
  `alumno` varchar(10) NOT NULL,
  `tema` varchar(30) NOT NULL,
  `observaciones` varchar(100) NOT NULL,
  `fecha` varchar(100) NOT NULL,
  `hora_inicio` varchar(10) NOT NULL,
  `hora_fin` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `asesorias`
--

INSERT INTO `asesorias` (`codigo`, `alumno`, `tema`, `observaciones`, `fecha`, `hora_inicio`, `hora_fin`) VALUES
('1596', 'Jared Emil', 'Modificar Estadias', 'Modificar Corregido', '2023-03-01', '10am', '11pm'),
('8888', 'portilla', 'matematicas', 'No se', '2022-11-18', '12am', '5pm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadias`
--

CREATE TABLE `estadias` (
  `matricula` int(30) NOT NULL,
  `aPaterno` varchar(60) NOT NULL,
  `aMaterno` varchar(40) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  `dCalle` varchar(100) NOT NULL,
  `dNumero` varchar(22) NOT NULL,
  `dColonia` varchar(100) NOT NULL,
  `dCodigoPostal` varchar(22) NOT NULL,
  `aTelefono` varchar(100) NOT NULL,
  `aCorreo` varchar(100) NOT NULL,
  `aFacebook` varchar(100) NOT NULL,
  `aInstagram` varchar(100) NOT NULL,
  `nombre_tutor` varchar(100) NOT NULL,
  `nombre_director` varchar(100) NOT NULL,
  `nombre_asesor` varchar(100) NOT NULL,
  `direccion_empresa` varchar(100) NOT NULL,
  `nombre_representante_empresa` varchar(100) NOT NULL,
  `correo_asesor` varchar(100) NOT NULL,
  `telefono_empresa` varchar(100) NOT NULL,
  `fecha_vinculacion` varchar(44) NOT NULL,
  `nombre_representante_vinculacion` varchar(100) NOT NULL,
  `aDocumento` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estadias`
--

INSERT INTO `estadias` (`matricula`, `aPaterno`, `aMaterno`, `nombre`, `sexo`, `dCalle`, `dNumero`, `dColonia`, `dCodigoPostal`, `aTelefono`, `aCorreo`, `aFacebook`, `aInstagram`, `nombre_tutor`, `nombre_director`, `nombre_asesor`, `direccion_empresa`, `nombre_representante_empresa`, `correo_asesor`, `telefono_empresa`, `fecha_vinculacion`, `nombre_representante_vinculacion`, `aDocumento`) VALUES
(2147483647, 'Frias', 'Aguilar', 'Jared Emiliano', '2', 'Andres Arrieta', '434', 'Domingo Arrieta', '34189', '(618)2288046', 'jfassj@gmail.com', '@jfassj', '@jfassj', 'Raul Gonzalez', 'Liz Cabello', 'Francisco', 'FACC', 'Panchito', 'panchito@gmail.com', '(618)2299663', '09-01-10', 'Panchito', 'buenasnoches.docx');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudio`
--

CREATE TABLE `estudio` (
  `nombre` text NOT NULL,
  `edad` int(10) NOT NULL,
  `direccion` varchar(60) NOT NULL,
  `carrera` text NOT NULL,
  `modalidad` text NOT NULL,
  `eleccion` text NOT NULL,
  `trabajas` text NOT NULL,
  `horas` varchar(60) NOT NULL,
  `ingreso_mensua` varchar(60) NOT NULL,
  `egreso_mensua` varchar(60) NOT NULL,
  `casa` text NOT NULL,
  `cuartos` text NOT NULL,
  `personas` text NOT NULL,
  `internet` text NOT NULL,
  `computadora` text NOT NULL,
  `refri` text NOT NULL,
  `agua` varchar(60) NOT NULL,
  `drenado` text NOT NULL,
  `electricidad` text NOT NULL,
  `beca` varchar(60) NOT NULL,
  `ambiente` varchar(60) NOT NULL,
  `responsabilidades` varchar(60) NOT NULL,
  `discapacidad` varchar(60) NOT NULL,
  `secundaria` varchar(60) NOT NULL,
  `final_secu` varchar(60) NOT NULL,
  `prepa` varchar(60) NOT NULL,
  `especialidad` varchar(60) NOT NULL,
  `final_prepa` varchar(60) NOT NULL,
  `habitos` text NOT NULL,
  `estudias` text NOT NULL,
  `enfermedad` text NOT NULL,
  `medicamento` text NOT NULL,
  `tristeza` text NOT NULL,
  `pesimismo` text NOT NULL,
  `irritabilidad` text NOT NULL,
  `retirada` text NOT NULL,
  `indesicion` text NOT NULL,
  `imagen_corporal` text NOT NULL,
  `enlentecimiento` text NOT NULL,
  `insomnio` text NOT NULL,
  `peso` text NOT NULL,
  `calor` text NOT NULL,
  `temblor_piernas` text NOT NULL,
  `temblor_manos` text NOT NULL,
  `mareo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudio`
--

INSERT INTO `estudio` (`nombre`, `edad`, `direccion`, `carrera`, `modalidad`, `eleccion`, `trabajas`, `horas`, `ingreso_mensua`, `egreso_mensua`, `casa`, `cuartos`, `personas`, `internet`, `computadora`, `refri`, `agua`, `drenado`, `electricidad`, `beca`, `ambiente`, `responsabilidades`, `discapacidad`, `secundaria`, `final_secu`, `prepa`, `especialidad`, `final_prepa`, `habitos`, `estudias`, `enfermedad`, `medicamento`, `tristeza`, `pesimismo`, `irritabilidad`, `retirada`, `indesicion`, `imagen_corporal`, `enlentecimiento`, `insomnio`, `peso`, `calor`, `temblor_piernas`, `temblor_manos`, `mareo`) VALUES
('Martin Moreno Lopez', 19, 'Zona Centro', 'TI', 'Clasica', '3', 'no', '0', '0', '0', 'Blanca', '3', '4', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'No', 'Hostil', 'No se distribuyen', 'Visual', 'Colegio Anglo Español', '80', 'Colegio Anglo Español', 'nada', '80', 'Ninguno', 'Ninguna', 'Si', 'No', '1', '1', '2', '1', '1', '2', '1', '1', '2', '2', '1', '2', '1'),
('Diego Gonzalez Herrera', 24, 'Fracc. Villas del Manantial C. Rios Sama #101C', 'TI', 'Clasica', '5', 'Si', '4', '6000', '6000', 'Rentada', '2', '3', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'Hostil', 'Equitativamente', 'Visual', 'Secundaria Prof. Jesús Rivas Quiñones', '8.5', 'COBAED #29', 'Programación', '8.5', 'Ninguno', 'Ninguna', 'No', 'No', '3', '2', '2', '2', '1', '2', '2', '1', '1', '2', '2', '2', '1'),
('Diego Gonzalez Herrera', 24, 'Fracc. Villas del Manantial C. Rios Sama #101C', 'TI', 'Clasica', '5', 'Si', '4', '6000', '6000', 'Rentada', '2', '3', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'Hostil', 'Equitativamente', 'Visual', 'Secundaria Prof. Jesús Rivas Quiñones', '8.5', 'COBAED #29', 'Programación', '8.5', 'Ninguno', 'Ninguna', 'No', 'No', '3', '2', '2', '2', '1', '2', '2', '1', '1', '2', '2', '2', '1'),
('bernardo castañeda rios', 20, 'Fracc. galicia', 'TI', 'Clasica', '5', 'Si', '8', '4500', '2500', 'Rentada', '2', '2', 'Si', 'Si', 'Si', 'Si', 'Si', 'Si', 'No', 'Positivo', 'Equitativamente', 'No', 'En el ranchito', '8.6', 'COBAEZ Plantel sombrerete ', 'Ti', '9.5', 'Ninguno', 'Ninguna', 'No', 'Si', '1', '1', '1', '1', '1', '2', '1', '2', '1', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedagogia`
--

CREATE TABLE `pedagogia` (
  `matricula` int(10) NOT NULL,
  `aPaterno` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL,
  `aMaterno` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `sexo` tinyint(4) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `motivo` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `aTelefono` varchar(12) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `aCorreo` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `aCarrera` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ptc`
--

CREATE TABLE `ptc` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `act` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` date NOT NULL,
  `participantes` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `lugar` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `obs` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id` varchar(11) NOT NULL,
  `alumno` varchar(10) NOT NULL,
  `fecha` varchar(100) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `acciones` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `alumno`, `fecha`, `tipo`, `acciones`, `estado`) VALUES
('3041210021', 'Jared Emil', '2023-03-01', 'Atencion en el medio academico', 'Entrevista de Trabajo', 'Concluida'),
('5', '3041210015', '2022-11-19', 'Atencion en el medio academico', 'No se hizo nada', 'Proceso'),
('666', 'portilla', '2022-11-18', 'Personal', 'No se hizo nada', 'Proceso'),
('hjh', 'portilla', '2022-11-18', 'Personal', 'No se hizo nada', 'Concluida');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`matricula`);

--
-- Indices de la tabla `asesorias`
--
ALTER TABLE `asesorias`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `alumno` (`alumno`);

--
-- Indices de la tabla `estadias`
--
ALTER TABLE `estadias`
  ADD PRIMARY KEY (`matricula`);

--
-- Indices de la tabla `pedagogia`
--
ALTER TABLE `pedagogia`
  ADD PRIMARY KEY (`matricula`);

--
-- Indices de la tabla `ptc`
--
ALTER TABLE `ptc`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alumno` (`alumno`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ptc`
--
ALTER TABLE `ptc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
