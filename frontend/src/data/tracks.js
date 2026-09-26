import pista1 from '../assets/pista1.png'
import pista2 from '../assets/pista2.png'

const tracks = [
  {
    id: 'pista-1',
    name: 'Pista 1',
    image: pista1,
    imagePosition: 'center right',
    features: ['Enduro', 'Adventure', 'Cronometraje', 'Reglamento'],
    record: '01:42.38',
    recordText: 'Esperando tu mejor vuelta',
    ranking: [
      { position: 1, rider: 'Martín Silva', bike: 'KTM EXC 300', time: '01:42.38' },
      { position: 2, rider: 'Nicolás Pereira', bike: 'Yamaha YZ', time: '01:44.12' },
      { position: 3, rider: 'Diego Rodríguez', bike: 'Honda CRF', time: '01:47.09' },
    ],
  },
  {
    id: 'pista-2',
    name: 'Pista 2',
    image: pista2,
    imagePosition: 'center left',
    features: ['Motocross', 'Saltos', 'Curvas técnicas', 'Cronometraje'],
    record: '01:49.76',
    recordText: 'Esperando tu mejor vuelta',
    ranking: [
      { position: 1, rider: 'Santiago Méndez', bike: 'Husqvarna TE 300', time: '01:49.76' },
      { position: 2, rider: 'Federico Acosta', bike: 'GasGas EC 300', time: '01:52.31' },
      { position: 3, rider: 'Lucas Fernández', bike: 'Beta RR 250', time: '01:55.84' },
    ],
  },
]

export default tracks
