import * as React from 'react';
import { useRef } from 'react';
import { theme } from '../theme';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import { Line2 } from 'three-stdlib';
import { Box, Text } from '@chakra-ui/react';
import { Attractor } from '../assets/attractors';

const PARTICLES = 25;
const PARTICLE_COLORS = [
	theme.colors.mdot.magenta,
	theme.colors.mdot.cyan,
	theme.colors.mdot.yellow
]

const selectRandomColor = (): string => {
	const index = Math.floor(Math.random() * PARTICLE_COLORS.length);
	return PARTICLE_COLORS[index];
}

var currentLinePoints = [] as [number, number, number][];

for (let i = 0; i < PARTICLES; i++) {
	currentLinePoints.push([1*(Math.random()-0.5), 1*(Math.random()-0.5), 1*(Math.random()-0.5)]);
};

const AttractorCurrentLine = (params: {index: number, color: string, attractor: Attractor}): JSX.Element => {
	const lineRef = useRef<Line2>(null!);
	useFrame(() => {
		const currentPoint = currentLinePoints[params.index];
		const nextPoint = params.attractor.function(currentPoint, params.attractor.constants);
		lineRef.current.geometry = lineRef.current.geometry.setPositions([currentPoint, nextPoint].flat());
		currentLinePoints[params.index] = nextPoint;
	});

	return (
		<Line
			ref={lineRef}
			rotation={params.attractor.camera.rotation}
			scale={params.attractor.camera.scale}
			points={[currentLinePoints[params.index], currentLinePoints[params.index]]}
			color={params.color}
			lineWidth={3}
		/>
	)
}

export const AttractorComponent = (params: {attractor: Attractor}): JSX.Element => (
	<Box title={params.attractor.title + ' ' + params.attractor.subtitle}>
		<Canvas orthographic camera={{ position: [0, 0, -600] }}>
			<Line scale={5} points={[[-1000, 0, 0], [1000, 0, 0]]} color={theme.colors.mdot.magenta}/>
			<Line scale={5} points={[[0, -1000, 0], [0, 1000, 0]]} color={theme.colors.mdot.cyan}/>
			<Line scale={5} points={[[0, 0, -1000], [0, 0, 1000]]} color={theme.colors.mdot.yellow}/>
			<group position={params.attractor.camera.position}>
				{Array.from(Array(PARTICLES).keys()).map((index) => ( <AttractorCurrentLine index={index} color={selectRandomColor()} attractor={params.attractor} /> ))}
			</group>
			<OrbitControls makeDefault />
		</Canvas>
	</Box>
);