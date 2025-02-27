export interface skill {
  character_ID: string
  skill_name: string
  aka_kor: string
  aka_eng: string
  status: string
  command: typeof command
  hit_position: []
  dmg: []
  start: number
  hit: string
  counter: string
  guard: string
  description_1_kor: string
  description_2_kor: string
  description_1_eng: string
  description_2_eng: string
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
