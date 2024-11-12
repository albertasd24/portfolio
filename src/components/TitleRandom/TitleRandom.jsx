"use client";
import React, { useEffect, useRef } from 'react';
import './TitleRandom.css';
import PropTypes from 'prop-types';

const TitleRandom = ({ title, className = "" }) => {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const titleRef = useRef(null);

	const startEffect = () => {
		let iterations = 0;
		const intervalT = setInterval(() => {
			titleRef.current.innerText = titleRef.current.innerText
				.split("")
				.map((letter, index) => {
					if (index < iterations) {
						return titleRef.current.dataset.value[index];
					}
					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");

			if (iterations >= titleRef.current.dataset.value.length) {
				clearInterval(intervalT);
			}

			iterations += 1 / 3;
		}, 30);
	};

	useEffect(() => {
		// Ejecuta el efecto inmediatamente después de renderizar
		startEffect();

		// Configura un intervalo para repetir el efecto cada 10 segundos
		const intervalId = setInterval(startEffect, 10000);

		// Limpia el intervalo al desmontar el componente
		return () => clearInterval(intervalId);
	}, []);

	return (
		<h2 ref={titleRef} className={className} data-value={title}>
			{title}
		</h2>
	);
};

// TitleRandom.propTypes = {
// 	title: PropTypes.string.isRequired,
// };

export default TitleRandom;
