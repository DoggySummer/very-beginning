'use client'
import { skill } from '@/constant/type'
import { ChangeEvent, useState } from 'react'
import { characterList } from '@/constant/character'

export default function Home() {
  //usestate의 미친듯한 길이...
  const [form, setForm] = useState({})
  const [character_name, setCharacter_name] = useState('')
  const [skill_name, setSkill_name] = useState('')
  const [aka_kor, setAka_kor] = useState('')
  const [posture, setPosture] = useState('basic')
  const [command, setCommand] = useState<string[]>([])
  const [hit_position, setHit_position] = useState('')
  const [dmg, setDmg] = useState('')
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

  const makeCommand = (value: string) => {
    const inputCommand = value.split('')
    const newCommand = []

    for (let i = 0; i < inputCommand.length; i++) {
      if (!isNaN(Number(inputCommand[i]))) {
        // 숫자인 경우
        newCommand.push(inputCommand[i])
      } else {
        // 문자인 경우
        if (i + 1 < inputCommand.length) {
          newCommand.push(inputCommand[i] + inputCommand[i + 1])
          i++
        } else {
          newCommand.push(inputCommand[i])
        }
      }
    }
    setCommand(newCommand)
  }

  return (
    <div className='mt-24 flex'>
      <div className='mx-auto w-[400px] flex flex-col'>
        <div className='flex flex-row items-center gap-4 my-3 justify-between'>
          <div className=''>캐릭터 아이디 영어로</div>
          <input
            type='text'
            name='character_ID'
            className='py-3 border-2 pl-2 w-48 block '
            value={character_name}
            onChange={(e) => setCharacter_name(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>스킬 이름 영어로</div>
          <input
            type='text'
            name='skill_name'
            className='py-3 border-2 pl-2 w-48 block'
            value={skill_name}
            onChange={(e) => setSkill_name(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>AKA 한글로</div>
          <input
            type='text'
            name='aka_kor'
            className='py-3 border-2 pl-2 w-48 block'
            value={aka_kor}
            onChange={(e) => setAka_kor(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>자세인데 디폴트가 basic임</div>
          <input
            type='text'
            name='status'
            className='py-3 border-2 pl-2 w-48 block'
            value={posture}
            onChange={(e) => setPosture(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>커맨드</div>
          <input
            type='text'
            name='command'
            className='py-3 border-2 pl-2 w-48 block'
            value={command.join('')}
            onChange={(e) => makeCommand(e.target.value)}
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
            className='py-3 border-2 pl-2 w-48 block'
            value={hit_position}
            onChange={(e) => setHit_position(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>데미지</div>
          <input
            type='text'
            name='dmg'
            className='py-3 border-2 pl-2 w-48 block'
            value={dmg}
            onChange={(e) => setDmg(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>발동 프레임</div>
          <input
            type='text'
            name='start'
            className='py-3 border-2 pl-2 w-48 block'
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>맞췄을 시</div>
          <input
            type='text'
            name='hit'
            className='py-3 border-2 pl-2 w-48 block'
            value={hit}
            onChange={(e) => setHit(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>카운터 시</div>
          <input
            type='text'
            name='counter'
            className='py-3 border-2 pl-2 w-48 block'
            value={counter}
            onChange={(e) => setCounter(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>가드 시 프레임</div>
          <input
            type='text'
            name='guard'
            className='py-3 border-2 pl-2 w-48 block'
            value={guard}
            onChange={(e) => setGuard(e.target.value)}
          />
        </div>
      </div>
      <div className='mx-auto w-[400px] flex flex-col'>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>히트 시 아이콘</div>
          <input
            type='text'
            name='description_1_kor'
            className='py-3 border-2 pl-2 w-48 block'
            value={description_1_kor}
            onChange={(e) => setDescription_1_kor(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>한국 설명-1</div>
          <input
            type='text'
            name='description_1_kor'
            className='py-3 border-2 pl-2 w-48 block'
            value={description_1_kor}
            onChange={(e) => setDescription_1_kor(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>한국 설명-2</div>
          <input
            type='text'
            name='description_2_kor'
            className='py-3 border-2 pl-2 w-48 block'
            value={description_2_kor}
            onChange={(e) => setDescription_2_kor(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>영어 설명-1</div>
          <input
            type='text'
            name='description_1_eng'
            className='py-3 border-2 pl-2 w-48 block'
            value={description_1_eng}
            onChange={(e) => setDescription_1_eng(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>영어 설명-2</div>
          <input
            type='text'
            name='description_2_eng'
            className='py-3 border-2 pl-2 w-48 block'
            value={description_2_eng}
            onChange={(e) => setDescription_2_eng(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
