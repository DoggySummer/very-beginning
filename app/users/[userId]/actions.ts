'use server'

import { updateUser } from '@/app/data-access/user'
import { revalidatePath } from 'next/cache'

export async function updateNameAction(userId: string, formData: FormData) {
  const newName = formData.get('name') as string
  await updateUser(userId, newName)
  revalidatePath(`users/${userId}`)
}
