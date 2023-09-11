export type Attractor = {
	title: string,
	subtitle: string,
	constants: number[],
	function: Function,
	camera: {
		scale: number,
		position: [number, number, number],
		rotation: [number, number, number]
	}
}

export const lorenz: Attractor = {
	title: 'Lorenz attractor',
	subtitle: '(ς=10, ρ=28, β=8/3)',
	constants: [10, 28, 8/3],
	function: (p: [number, number, number], c: number[]): [number, number, number] => [
		p[0] + (c[0]*(p[1]-p[0])) * 0.01,
		p[1] + (p[0]*(c[1]-p[2]) - p[1]) * 0.01,
		p[2] + (p[0] * p[1] - (c[2] * p[2])) * 0.01
	],
	camera: {
		scale: 1,
		position: [0, 0, -10],
		rotation: [0, 0, 0]
	}
}

/*
export const aizawa: Attractor = {
	title: 'Aizawa attractor',
	subtitle: '(a=0.95, b=0.7, c=0.65, d=3.5, e=0.25, f=0.1)',
	constants: [0.95, 0.7, 0.65, 3.5, 0.25, 0.1],
	function: (p: [number, number, number], c: number[]): [number, number, number] => [
		p[0] + (((p[2]-c[1])*p[0]) - (c[3]*p[1])) * 0.05,
		p[1] + ((c[3]*p[0]) + ((p[2]-c[1])*p[1])) * 0.05,
		p[2] + (c[2] + (c[0]*p[2]) - ((p[2]*p[2]*p[2])/3) - (((p[0]*p[0]) + (p[1]*p[1]))*(1+c[4]*p[2])) + (c[5]*p[2]*(p[0]*p[0]*p[0])) ) * 0.05
	],
	camera: {
		scale: 25,
		position: [0, 0, 0],
		rotation: [-Math.PI/2, 0, Math.PI]
	}
}

export const thomas: Attractor = {
	title: 'Thomas attractor',
	subtitle: '(b=0.19)',
	constants: [0.19],
	function: (p: [number, number, number], c: number[]): [number, number, number] => [
		p[0] + (Math.sin(p[1]) - c[0]*p[0]) * 0.15,
		p[1] + (Math.sin(p[2]) - c[0]*p[1]) * 0.15,
		p[2] + (Math.sin(p[0]) - c[0]*p[2]) * 0.15
	],
	camera: {
		scale: 15,
		position: [0, 0, 0],
		rotation: [Math.PI/5, Math.PI/4, Math.PI/2]
	}
}

export const rucklidge: Attractor = {
	title: 'Rucklidge attractor',
	subtitle: '(k=2, a=6.7)',
	constants: [2, 6.7],
	function: (p: [number, number, number], c: number[]): [number, number, number] => [
		p[0] + (-c[0]*p[0]+c[1]*p[1]-p[1]*p[2]) * 0.05,
		p[1] + (p[0]) * 0.05,
		p[2] + (-p[2]+p[1]*p[1]) * 0.05
	],
	camera: {
		scale: 5,
		position: [0, -40, 0],
		rotation: [-Math.PI/2, 0, Math.PI]
	}
}
*/