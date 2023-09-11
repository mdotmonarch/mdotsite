import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail, Sphere } from '@react-three/drei';
import { Attractor } from '../assets/attractors';

const PARTICLES = 3;

var currentLinePoints = [] as [number, number, number][];

for (let i = 0; i < PARTICLES; i++) {
	currentLinePoints.push([0, Math.random(), 0]);
};

const AttractorCurrentSphere = (params: {index: number, attractor: Attractor}): JSX.Element => {
	const meshRef = useRef(null!);
	useFrame(() => {
		const currentPoint = currentLinePoints[params.index];
		const nextPoint = params.attractor.function(currentPoint, params.attractor.constants);
		currentLinePoints[params.index] = nextPoint;
		meshRef.current.position.set(nextPoint[0], nextPoint[1], nextPoint[2]);
	});

	return (
		<mesh ref={meshRef}>
			<Trail
				color={`rgb(${50}, ${50}, ${50}))`}
				width={0.05}
				length={50}
				attenuation={(width) => width}
			>
				<Sphere
					args={[0.1, 2, 2]}
					position={currentLinePoints[params.index]}
				>
					<meshStandardMaterial color={`rgb(${50}, ${50}, ${50}))`} />
				</Sphere>
			</Trail>
		</mesh>
	)
}

export const AttractorComponent = (params: {attractor: Attractor}): JSX.Element => (
	<group scale={(window.innerWidth < window.innerHeight ? 0.09 : 0.2)} rotation={[0, 0, (window.innerWidth < window.innerHeight ? 0.1 : 2.4)]}>
		{
			Array.from(Array(PARTICLES).keys()).map(
				(index) => ( <AttractorCurrentSphere index={index} attractor={params.attractor} /> )
			)
		}
	</group>
);