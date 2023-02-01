CREATE TABLE `pacientes` (
  `id` bigint(20) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `dni` varchar(255) DEFAULT NULL,
  `height` double DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `symptom` varchar(255) DEFAULT NULL,
  `weight` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id`, `age`, `dni`, `height`, `lastname`, `name`, `symptom`, `weight`) VALUES
(1, 20, '12345678', 1.75, 'Vargas', 'Brandok', 'Testing 1', 80);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;
