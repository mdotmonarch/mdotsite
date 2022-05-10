import * as React from 'react';
import { useRef } from 'react';
import { theme } from '../theme';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import { Line2 } from 'three-stdlib';
import { Box, Text } from '@chakra-ui/react';

const DT = 0.05;

const A = 0.95;
const B = 0.7;
const C = 0.65;
const D = 3.5;
const E = 0.25;
const F = 0.1

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

const aizawaNextPoint = (point: [number, number, number]): [number, number, number] => {
	const x = point[0];
	const y = point[1];
	const z = point[2];
	const dx = (((z-B)*x) - (D*y)) * DT;
	const dy = ((D*x) + ((z-B)*y)) * DT;
	const dz = (C + (A*z) - ((z*z*z)/3) - (((x*x) + (y*y))*(1+E*z)) + (F*z*(x*x*x)) ) * DT;
	return [x+dx, y+dy, z+dz];
}

var currentLinePoints = [] as [number, number, number][];

for (let i = 0; i < PARTICLES; i++) {
	currentLinePoints.push([1*(Math.random()-0.5), 1*(Math.random()-0.5), 1*(Math.random()-0.5)]);
};

const AizawaAttractorCurrentLine = (params: {index: number, color: string}): JSX.Element => {
	const lineRef = useRef<Line2>(null!);
	useFrame(() => {
		const currentPoint = currentLinePoints[params.index];
		const nextPoint = aizawaNextPoint(currentPoint);
		lineRef.current.geometry = lineRef.current.geometry.setPositions([currentPoint, nextPoint].flat());
		currentLinePoints[params.index] = nextPoint;
	});

	return (
		<Line
			ref={lineRef}
			rotation={[-Math.PI/2, 0, Math.PI]}
			scale={25}
			points={[currentLinePoints[params.index], currentLinePoints[params.index]]}
			color={params.color}
			lineWidth={5}
		/>
	)
}

export const AizawaAttractorComponent = (): JSX.Element => (
	<Box>
		<Canvas orthographic camera={{ position: [0, 0, -600] }}>
			<Line scale={5} points={[[-1000, 0, 0], [1000, 0, 0]]} color={theme.colors.mdot.magenta}/>
			<Line scale={5} points={[[0, -1000, 0], [0, 1000, 0]]} color={theme.colors.mdot.cyan}/>
			<Line scale={5} points={[[0, 0, -1000], [0, 0, 1000]]} color={theme.colors.mdot.yellow}/>
			<group position={[0, 0, 0]}>
				{Array.from(Array(PARTICLES).keys()).map((index) => ( <AizawaAttractorCurrentLine index={index} color={selectRandomColor()} /> ))}
			</group>
			<OrbitControls makeDefault />
		</Canvas>
		<Text color='grey' pt='2' fontSize='xs' textAlign='center'>
			Aizawa attractor (a=0.95, b=0.7, c=0.65, d=3.5, e=0.25, f=0.1)
		</Text>
	</Box>
);