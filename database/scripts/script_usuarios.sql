-- renac_db.usuarios definition

CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(30) NOT NULL,
  `clave` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `nombre` varchar(35) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `perfil` varchar(80) NOT NULL,
  `estado` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_UK` (`mail`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;



INSERT INTO renac_db.usuarios
(id, mail, clave, nombre, apellido, perfil, estado)
VALUES(7, 'martin_perez@gmail.com', '$2b$10$6rf2aBDYd/Ra/5x4aCZNM.0EUK81BlO4q5GrUWGWkLDe0zG61xMo6', 'Martin', 'Perez', 'renaquero', 'T');
