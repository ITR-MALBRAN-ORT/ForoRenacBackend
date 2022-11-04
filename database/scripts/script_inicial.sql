USE `renac_db` ;

-- -----------------------------------------------------
-- Table `renac_db`.`casos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`casos` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`casos` (
  `idcasos` INT NOT NULL,
  `estado` VARCHAR(100) NULL,
  `usuarios_maternidades_usuarios_id` INT NOT NULL,
  `usuarios_maternidades_maternidades_id` INT NOT NULL,
  PRIMARY KEY (`idcasos`))
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `renac_db`.`casos_bebe`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`casos_bebe` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`casos_bebe` (
  `idcasos_bebe` INT NOT NULL,
  `nombre` VARCHAR(100) NULL,
  `apellido` VARCHAR(500) NULL,
  `dni` VARCHAR(15) NULL,
  `nro_hc` INT NULL,
  `fecha_nacimiento` DATETIME NULL,
  `nacido` VARCHAR(20) NULL,
  `alta` VARCHAR(50) NULL,
  `sexo` VARCHAR(50) NULL,
  `peso` INT NULL,
  `talla` INT NULL,
  `pc` INT NULL,
  `eg` INT NULL,
  `gestas` INT NULL,
  `gemelo` VARCHAR(50) NULL,
  `con_alta` VARCHAR(50) NULL,
  `hosp_derivado` VARCHAR(500) NULL,
  `casos_idcasos` INT NOT NULL,
  PRIMARY KEY (`idcasos_bebe`, `casos_idcasos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `renac_db`.`casos_imagenes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`casos_imagenes` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`casos_imagenes` (
  `idcasos_imagenes` INT NOT NULL,
  `directorio` VARCHAR(5000) NOT NULL,
  `nombre_archivo` VARCHAR(500) NOT NULL,
  `nombre_real` VARCHAR(500) NOT NULL,
  `casos_idcasos` INT NULL,
  PRIMARY KEY (`idcasos_imagenes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `renac_db`.`casos_madre`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`casos_madre` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`casos_madre` (
  `idcasos_madre` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NULL,
  `apellido` VARCHAR(100) NULL,
  `dni` VARCHAR(50) NULL,
  `nro_hc` INT NULL,
  `edad` INT NULL,
  `domicilio_calle` VARCHAR(200) NULL,
  `domicilio_nro` INT NULL,
  `domicilio_localidad` VARCHAR(200) NULL,
  `domicilio_pcia` VARCHAR(200) NULL,
  `telefono` INT NULL,
  `casos_idcasos` INT NOT NULL,
  PRIMARY KEY (`idcasos_madre`, `casos_idcasos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `renac_db`.`casos_malforma`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`casos_malforma` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`casos_malforma` (
  `idcasos_malforma` INT NOT NULL,
  `detectado_prenatal` VARCHAR(4000) NULL,
  `malforma_prenatal` VARCHAR(4000) NULL,
  `malformacion` VARCHAR(4000) NULL,
  `estudios_complemtarios` VARCHAR(4000) NULL,
  `casos_idcasos` INT NOT NULL,
  PRIMARY KEY (`idcasos_malforma`, `casos_idcasos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `renac_db`.`clasificaciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`clasificaciones` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`clasificaciones` (
  `idclasificaciones` INT NOT NULL,
  `tipo` VARCHAR(100) NULL,
  `codigo` VARCHAR(45) NULL,
  `casos_idcasos` INT NOT NULL,
  PRIMARY KEY (`idclasificaciones`, `casos_idcasos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `renac_db`.`maternidades`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`maternidades` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`maternidades` (
  `idmaternidades` INT NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `ciudad` VARCHAR(500) NOT NULL,
  `provincia` VARCHAR(500) NOT NULL,
  `estado` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idmaternidades`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `renac_db`.`pedidos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`pedidos` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`pedidos` (
  `idpedidos` INT NOT NULL,
  `fecha` DATETIME NULL,
  `pantalla` VARCHAR(500) NULL,
  `campo` VARCHAR(500) NULL,
  `descripcion` VARCHAR(500) NULL,
  `estado` VARCHAR(500) NULL,
  `casos_idcasos` INT NULL,
  `resumen_idresumen` INT NULL,
  PRIMARY KEY (`idpedidos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `renac_db`.`resumen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`resumen` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`resumen` (
  `idresumen` INT NOT NULL,
  `año` INT(4) NULL,
  `mes` VARCHAR(10) NULL,
  `con_anomalias_vivos` INT NULL,
  `con_anomalias_muertos` INT NULL,
  `sin_anomalias_vivos` INT NULL,
  `sin_anomalias_muertos` INT NULL,
  `maternidades_idmaternidades` INT NOT NULL,
  PRIMARY KEY (`idresumen`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `renac_db`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`usuarios` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mail` VARCHAR(45) NOT NULL,
  `clave` VARCHAR(100) NOT NULL,
  `nombre` VARCHAR(100) NULL,
  `apellido` VARCHAR(100) NULL,
  `perfil` VARCHAR(20) NULL,
  `estado` VARCHAR(20) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `mail_UNIQUE` ON `renac_db`.`usuarios` (`mail` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `renac_db`.`usuarios_has_maternidades`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `renac_db`.`usuarios_maternidades` ;

CREATE TABLE IF NOT EXISTS `renac_db`.`usuarios_maternidades` (
  `usuarios_id` INT NOT NULL,
  `maternidades_id` INT NOT NULL,
  PRIMARY KEY (`usuarios_id`, `maternidades_id`))
ENGINE = InnoDB;


INSERT INTO renac_db.usuarios
(id, mail, clave, nombre, apellido, perfil, estado)
VALUES
(7, 'martin_perez@gmail.com', '$2b$10$6rf2aBDYd/Ra/5x4aCZNM.0EUK81BlO4q5GrUWGWkLDe0zG61xMo6', 'Martin', 'Perez', 'renaquero', 'TEMPORAL'),
(8, 'juan_lopez@gmail.com', '$2b$10$6rf2aBDYd/Ra/5x4aCZNM.0EUK81BlO4q5GrUWGWkLDe0zG61xMo6', 'Juan', 'Lopez', 'renaquero', 'TEMPORAL'),
(9, 'maria_gomez@gmail.com', '$2b$10$6rf2aBDYd/Ra/5x4aCZNM.0EUK81BlO4q5GrUWGWkLDe0zG61xMo6', 'Maria', 'Gomez', 'renaquero', 'TEMPORAL'),
(10, 'carla_segurola@gmail.com', '$2b$10$6rf2aBDYd/Ra/5x4aCZNM.0EUK81BlO4q5GrUWGWkLDe0zG61xMo6', 'Carla', 'Segurola', 'renaquero', 'TEMPORAL'),
(11, 'carlos_toledo@gmail.com', '$2b$10$6rf2aBDYd/Ra/5x4aCZNM.0EUK81BlO4q5GrUWGWkLDe0zG61xMo6', 'Carlos', 'Toledo', 'renaquero', 'TEMPORAL');

INSERT INTO renac_db.maternidades
(idmaternidades, descripcion, ciudad, provincia, estado)
VALUES
(1,'Hospital Alemán','Capital Federal', 'Buenos Aires','ACTIVO'),
(2,'Hospital Central de Mendoza','Mendoza', 'Mendoza','ACTIVO'),
(3,'Hospital Cemic','Capital Federal', 'Buenos Aires','ACTIVO'),
(4,'Hospital Británico','', 'Buenos Aires','ACTIVO'),
(5,'Hospital Posadas','Villa Sarmiento', 'Buenos Aires','ACTIVO'),
(6,'Maternidad Santa Rosa','Vicente Lopez', 'Buenos Aires','ACTIVO'),
(7,'Sanatorio Güemes','Villa Sarmiento', 'Buenos Aires','ACTIVO'),
(8,'Hospital Austral','Pilar', 'Buenos Aires','ACTIVO'),
(9,'Hospital Español de la Plata','La Plata', 'Buenos Aires','ACTIVO'),
(10,'Hospital Nacional de Cínicas','Cordoba', 'Cordoba','ACTIVO');

INSERT INTO renac_db.usuariosmaternidades
(usuarios_id, maternidades_id)
VALUES
(7, 1),
(8, 2),
(8, 3),
(8, 4),
(9, 5),
(10, 6),
(10, 7),
(10, 8),
(11, 5),
(11, 9),
(11, 10);