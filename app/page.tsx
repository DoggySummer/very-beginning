'use client'
import { skill } from '@/constant/type'
import { ChangeEvent, useState } from 'react'

export default function Home() {
  //usestate의 미친듯한 길이...
  const [form, setForm] = useState({})
  const [character_ID, setCharacter_ID] = useState('')
  const [skill_name, setSkill_name] = useState('')
  const [aka_kor, setAka_kor] = useState('')
  const [aka_eng, setAka_eng] = useState('')
  const [status, setStatus] = useState('basic')
  const [command, setCommand] = useState([])
  const [hit_position, setHit_position] = useState([])
  const [dmg, setDmg] = useState(0)
  const [start, setStart] = useState('')
  const [hit, setHit] = useState('')
  const [counter, setCounter] = useState('')
  const [guard, setGuard] = useState('')
  const [description_1_kor, setDescription_1_kor] = useState('')
  const [description_2_kor, setDescription_2_kor] = useState('')
  const [description_1_eng, setDescription_1_eng] = useState('')
  const [description_2_eng, setDescription_2_eng] = useState('')

  const makeArray = (value: string) => {
    return value.split('/')
  }

  return (
    <div className='mt-24 flex'>
      <div className='mx-auto w-[400px] flex flex-col'>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>캐릭터 아이디 숫자로</div>
          <input
            type='text'
            name='character_ID'
            className='py-3 border-2 pl-2 w-48 block '
            value={character_ID}
            onChange={(e) => setCharacter_ID(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>스킬 이름 영어로</div>
          <input
            type='text'
            name='skill_name'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>AKA 한글</div>
          <input
            type='text'
            name='aka_kor'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>AKA 영어</div>
          <input
            type='text'
            name='aka_eng'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>자세인데 디폴트가 basic임</div>
          <input
            type='text'
            name='status'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>커맨드</div>
          <input
            type='text'
            name='command'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <button className='p-2 bg-amber-200 cursor-pointer mt-12'>
          입력 끝
        </button>
      </div>
      <div className='mx-auto w-[400px] flex flex-col'>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>히트되는 위치</div>
          <input
            type='text'
            name='hit_position'
            className='py-3 border-2 pl-2 w-48 block '
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>데미지</div>
          <input
            type='text'
            name='dmg'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>발동 프레임</div>
          <input
            type='text'
            name='start'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>맞췄을 시</div>
          <input
            type='text'
            name='hit'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>카운터 시</div>
          <input
            type='text'
            name='counter'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>가드 시 프레임</div>
          <input
            type='text'
            name='guard'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
      </div>
      <div className='mx-auto w-[400px] flex flex-col'>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>한국 설명-1</div>
          <input
            type='text'
            name='description_1_kor'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>한국 설명-2</div>
          <input
            type='text'
            name='description_2_kor'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>영어 설명-1</div>
          <input
            type='text'
            name='description_1_eng'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>영어 설명-2</div>
          <input
            type='text'
            name='description_2_eng'
            className='py-3 border-2 pl-2 w-48 block'
          />
        </div>
      </div>
    </div>
  )
}
