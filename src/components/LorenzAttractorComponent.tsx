import * as React from 'react';
import { useRef } from 'react';
import { theme } from '../theme';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import { Line2 } from 'three-stdlib';
import { Box, Text } from '@chakra-ui/react';

const SCALE = 3;
const DT = 0.01;

const SIGMA = 10;
const RHO = 28;
const BETA = 8 / 3;

const PARTICLES = 40;
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
	const x = point[0];
	const y = point[1];
	const z = point[2];
	const dx = (SIGMA*(y-x)) * DT
	const dy = (x * (RHO - z) - y) * DT;
	const dz = (x * y - (BETA * z)) * DT;
	return [x+dx, y+dy, z+dz];
}

var currentLinePoints = [] as [number, number, number][];

for (let i = 0; i < PARTICLES; i++) {
	currentLinePoints.push([1*(Math.random()-0.5), 1*(Math.random()-0.5), 1*(Math.random()-0.5)]);
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
			scale={SCALE}
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
			<group position={[0, -25*SCALE, 0]}>
				{Array.from(Array(PARTICLES).keys()).map((index) => ( <LorenzAttractorCurrentLine index={index} color={selectRandomColor()} /> ))}
			</group>
			<OrbitControls makeDefault />
		</Canvas>
		<Text color='grey' pt='2' fontSize='xs' textAlign='center'>
			Lorenz attractor (ς=10, ρ=28, β=8/3)
		</Text>
	</Box>
);