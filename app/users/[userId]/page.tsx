import { revalidatePath } from 'next/cache'
import { getUser, updateUser } from '../../data-access/user'
import { updateNameAction } from './actions'

export default async function UsersPage(params: { userId: string }) {
  const user = await getUser(params.userId)
  return (
    <div className='text-xl'>
      {user.name}
      <form action={updateNameAction.bind(null, user.id)}>
        <input className=' border-4' type='text' name='name' />
        <button className='border p-4'>submit</button>
      </form>
    </div>
  )
}
