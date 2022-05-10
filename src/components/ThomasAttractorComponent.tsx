import * as React from 'react';
import { useRef } from 'react';
import { theme } from '../theme';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import { Line2 } from 'three-stdlib';
import { Box, Text } from '@chakra-ui/react';

const DT = 0.1;

const B = 0.19;

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

const thomasNextPoint = (point: [number, number, number]): [number, number, number] => {
	const x = point[0];
	const y = point[1];
	const z = point[2];
	const dx = (Math.sin(y) - B*x) * DT;
	const dy = (Math.sin(z) - B*y) * DT;
	const dz = (Math.sin(x) - B*z) * DT;
	return [x+dx, y+dy, z+dz];
}

var currentLinePoints = [] as [number, number, number][];

for (let i = 0; i < PARTICLES; i++) {
	currentLinePoints.push([1*(Math.random()-0.5), 1*(Math.random()-0.5), 1*(Math.random()-0.5)]);
};

const ThomasAttractorCurrentLine = (params: {index: number, color: string}): JSX.Element => {
	const lineRef = useRef<Line2>(null!);
	useFrame(() => {
		const currentPoint = currentLinePoints[params.index];
		const nextPoint = thomasNextPoint(currentPoint);
		lineRef.current.geometry = lineRef.current.geometry.setPositions([currentPoint, nextPoint].flat());
		currentLinePoints[params.index] = nextPoint;
	});

	return (
		<Line
			ref={lineRef}
			rotation={[Math.PI/5, Math.PI/4, Math.PI/2]}
			scale={15}
			points={[currentLinePoints[params.index], currentLinePoints[params.index]]}
			color={params.color}
			lineWidth={5}
		/>
	)
}

export const ThomasAttractorComponent = (): JSX.Element => (
	<Box>
		<Canvas orthographic camera={{ position: [0, 0, -600] }}>
			<Line scale={5} points={[[-1000, 0, 0], [1000, 0, 0]]} color={theme.colors.mdot.magenta}/>
			<Line scale={5} points={[[0, -1000, 0], [0, 1000, 0]]} color={theme.colors.mdot.cyan}/>
			<Line scale={5} points={[[0, 0, -1000], [0, 0, 1000]]} color={theme.colors.mdot.yellow}/>
			<group position={[0, 0, 0]}>
				{Array.from(Array(PARTICLES).keys()).map((index) => ( <ThomasAttractorCurrentLine index={index} color={selectRandomColor()} /> ))}
			</group>
			<OrbitControls makeDefault />
		</Canvas>
		<Text color='grey' pt='2' fontSize='xs' textAlign='center'>
			Thomas attractor (b=0.19)
		</Text>
	</Box>
);