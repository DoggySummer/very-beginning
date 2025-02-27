export interface skill {
  ID: number
  character_ID: string
  skill_name: string
  aka: string
  status: string
  command: typeof command
  hit_position: []
  hit_status: []
  dmg: []
  start: number
  hit: string
  counter: string
  guard: string
  description_1: string
  description_2: string
  overview: string
}

const command = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  'rp',
  'rk',
  'lp',
  'lk',
  'ap',
  'ak',
  'ra',
  'la',
  'ht',
  'hx',
]
