'use server';

import { revalidatePath } from 'next/cache';
import { addEntry } from '@/lib/data';

export async function createEntry(formData: FormData) {

    const message = formData.get('message');
    const name = formData.get('name');

    if (!message || !name) return;

    await addEntry({
        id: Date.now().toString(),
        name: name as string,
        message: message as string,
    });

    revalidatePath('/');
}