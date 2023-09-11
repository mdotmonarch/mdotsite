import { lorenz } from '../assets/attractors';
import { Canvas } from '@react-three/fiber';

import { AttractorComponent } from '../components/AttractorComponent';
import { OverlayComponent } from '../components/OverlayComponent';

export const HomeView = () => (
	<>
		<Canvas orthographic camera={{position: [0, 0, 100], zoom: 100}} style={{height: '100vh', width: '100vw', zIndex: -1}}>
			<ambientLight/>
			<directionalLight castShadow intensity={20} position={[0, 0, 10]} />
			<AttractorComponent attractor={lorenz} />
		</Canvas>
		<OverlayComponent />
	</>
);