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
  const [posture, setPosture] = useState('')
  const [prefix, setPrefix] = useState('')
  const [command, setCommand] = useState<string[]>([])
  const [suffix, setSuffix] = useState('')
  const [hit_position, setHit_position] = useState<string[]>([])
  const [dmg, setDmg] = useState<string[]>([])
  const [start, setStart] = useState('')
  const [hit, setHit] = useState('')
  const [counter, setCounter] = useState('')
  const [guard, setGuard] = useState('')
  const [description_1_kor, setDescription_1_kor] = useState('')
  const [description_2_kor, setDescription_2_kor] = useState('')
  const [description_3_kor, setDescription_3_kor] = useState('')
  const [description_4_kor, setDescription_4_kor] = useState('')
  const [hitIcons, setHitIcons] = useState({
    heat: false,
    tornado: false,
    wall: false,
    floor: false,
    homing: false,
    power: false,
    crouch: false,
  })

  const makeDmgArray = (value: string) => {
    const newDmgArray = []
    const dmgArray = value.split(',')
    for (let i = 0; i < dmgArray.length; i++) {
      newDmgArray.push(dmgArray[i])
    }
    setDmg(newDmgArray)
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
    console.log(newCommand)
  }

  const handleIconChange = (iconName: string) => {
    setHitIcons((prev) => ({
      ...prev,
      [iconName]: !prev[iconName as keyof typeof prev],
    }))
  }

  const handleGet = async () => {
    try {
      const url = `/api/post?character_name=${character_name}&skill_name=${skill_name}`
      const response = await fetch(url, {
        method: 'get',
      })
      const result = await response.json()
      console.log('전송 성공:', result)

      // 모든 state 값 조회
      setCharacter_name(result.data.character_name)
      setSkill_name(result.data.skill_name)
      setAka_kor(result.data.aka_kor)
      setPosture(result.data.posture)
      setPrefix(result.data.prefix)
      setCommand(result.data.command)
      setSuffix(result.data.suffix)
      setHit_position(result.data.hit_position)
      setDmg(result.data.dmg)
      setStart(result.data.start)
      setHit(result.data.hit)
      setCounter(result.data.counter)
      setGuard(result.data.guard)
      setDescription_1_kor(result.data.description_1_kor)
      setDescription_2_kor(result.data.description_2_kor)
      setDescription_3_kor(result.data.description_3_kor)
      setDescription_4_kor(result.data.description_4_kor)
      setHitIcons({
        heat: result.data.hitIcons?.heat,
        tornado: result.data.hitIcons?.tornado,
        wall: result.data.hitIcons?.wall,
        floor: result.data.hitIcons?.floor,
        homing: result.data.hitIcons?.homing,
        power: result.data.hitIcons?.power,
        crouch: result.data.hitIcons?.crouch,
      })
    } catch (error) {
      console.error('전송 오류:', error)
      alert('데이터 전송 중 오류가 발생했습니다')
    }
  }

  const handleModify = async () => {
    try {
      const formData = {
        character_name,
        skill_name,
        aka_kor,
        posture,
        prefix,
        command,
        suffix,
        hit_position,
        dmg,
        start,
        hit,
        counter,
        guard,
        hitIcons,
        description_1_kor,
        description_2_kor,
        description_3_kor,
        description_4_kor,
      }
      const url = `/api/post?character_name=${character_name}&skill_name=${skill_name}`
      const response = await fetch(url, {
        method: 'put',
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (response.ok) {
        alert('수정 완료')
      } else {
        alert('수정 실패')
      }
    } catch (error) {
      console.error('수정 오류:', error)
    }
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
          <div className=''>커맨드 앞 내용</div>
          <input
            type='text'
            name='prefix'
            className='py-3 border-2 pl-2 w-48 block'
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>커맨드 (*은 뒤에 넣어서 표기함)</div>
          <input
            type='text'
            name='command'
            className='py-3 border-2 pl-2 w-48 block'
            value={command?.join('') || ''}
            onChange={(e) => makeCommand(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>커맨드 뒷 내용</div>
          <input
            type='text'
            name='suffix'
            className='py-3 border-2 pl-2 w-48 block'
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
          />
        </div>
      </div>
      <div className='mx-auto w-[400px] flex flex-col'>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>히트되는 위치 h m l ( , 로 구분) 특수는 abc</div>
          <input
            type='text'
            name='hit_position'
            className='py-3 border-2 pl-2 w-48 block'
            value={hit_position?.join(',') || ''}
            onChange={(e) => setHit_position(e.target.value.split(','))}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>데미지( , 로 구분)</div>
          <input
            type='text'
            name='dmg'
            className='py-3 border-2 pl-2 w-48 block'
            value={dmg?.join(',') || ''}
            onChange={(e) => makeDmgArray(e.target.value)}
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
          <div className=''>가드 시 프레임</div>
          <input
            type='text'
            name='guard'
            className='py-3 border-2 pl-2 w-48 block'
            value={guard}
            onChange={(e) => setGuard(e.target.value)}
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
      </div>
      <div className='mx-auto w-[400px] flex flex-col'>
        <div className='flex flex-col gap-4 my-3'>
          <div className=''>히트 시 아이콘</div>
          <div className='flex flex-wrap gap-4'>
            {Object.keys(hitIcons).map((icon) => (
              <label key={icon} className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  checked={hitIcons[icon as keyof typeof hitIcons]}
                  onChange={() => handleIconChange(icon)}
                  className='w-4 h-4'
                />
                <span>{icon}</span>
              </label>
            ))}
          </div>
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
          <div className=''>한국 설명-3</div>
          <input
            type='text'
            name='description_3_kor'
            className='py-3 border-2 pl-2 w-48 block'
            value={description_3_kor}
            onChange={(e) => setDescription_3_kor(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center gap-4 my-3  justify-between'>
          <div className=''>한국 설명-4</div>
          <input
            type='text'
            name='description_4_kor'
            className='py-3 border-2 pl-2 w-48 block'
            value={description_4_kor}
            onChange={(e) => setDescription_4_kor(e.target.value)}
          />
        </div>
        <button
          className='p-2 bg-blue-200 cursor-pointer mt-12'
          onClick={handleGet}
        >
          가져오기
        </button>
        <button
          className='p-2 bg-red-200 cursor-pointer mt-12'
          onClick={handleModify}
        >
          수정하기
        </button>
      </div>
    </div>
  )
}
