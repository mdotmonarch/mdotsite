import * as React from 'react';
import { useRef } from 'react';
import { theme } from '../theme';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import { Line2 } from 'three-stdlib';
import { Box } from '@chakra-ui/react';

const DT = 0.01;
const SIGMA = 10;
const RHO = 28;
const BETA = 8 / 3;
const PARTICLES = 30;
const PARTICLE_COLORS = [
	theme.colors.mdot.magenta,
	theme.colors.mdot.cyan,
	theme.colors.mdot.yellow
]

const selectRandomColor = (): string => {
	const index = Math.floor(Math.random() * PARTICLE_COLORS.length);
	return PARTICLE_COLORS[index];
}

const lorenzNextPoint = (point: [number, number, number]): [number, number, number] => {
	const x = point[0] + ((SIGMA * (point[1] - point[0])) * DT);
	const y = point[1] + ((point[0] * (RHO - point[2]) - point[1]) * DT);
	const z = point[2] + ((point[0] * point[1] - (BETA * point[2])) * DT);
	return [x, y, z];
}

var currentLinePoints = [] as [number, number, number][];

for (let i = 0; i < PARTICLES; i++) {
	currentLinePoints.push([10*(Math.random()-0.5), 10*(Math.random()-0.5), 10*(Math.random()-0.5)]);
};

const LorenzAttractorCurrentLine = (params: {index: number, color: string}): JSX.Element => {
	const lineRef = useRef<Line2>(null!);
	useFrame(() => {
		const currentPoint = currentLinePoints[params.index];
		const nextPoint = lorenzNextPoint(currentPoint);
		lineRef.current.geometry = lineRef.current.geometry.setPositions([currentPoint, nextPoint].flat());
		currentLinePoints[params.index] = nextPoint;
	});

	return (
		<Line
			ref={lineRef}
			rotation={[-Math.PI/2, 0, Math.PI]}
			scale={4}
			points={[currentLinePoints[params.index], currentLinePoints[params.index]]}
			color={params.color}
			lineWidth={5}
		/>
	)
}

export const LorenzAttractorComponent = (): JSX.Element => (
	<Box>
		<Canvas orthographic camera={{ position: [0, 0, -600] }}>
			<Line scale={5} points={[[-1000, 0, 0], [1000, 0, 0]]} color={theme.colors.mdot.magenta}/>
			<Line scale={5} points={[[0, -1000, 0], [0, 1000, 0]]} color={theme.colors.mdot.cyan}/>
			<Line scale={5} points={[[0, 0, -1000], [0, 0, 1000]]} color={theme.colors.mdot.yellow}/>
			<group position={[0, -100, 0]}>
				{Array.from(Array(PARTICLES).keys()).map((index) => ( <LorenzAttractorCurrentLine index={index} color={selectRandomColor()} /> ))}
			</group>
			<OrbitControls makeDefault />
		</Canvas>
	</Box>
);