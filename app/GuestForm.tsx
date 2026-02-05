'use client';

import { createEntry } from './actions';

export default function GuestForm() {
    return (
        <form action={createEntry} className="flex gap-2 mb-8">
            <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="border p-2 rounded text-white"
                required
            />
            <input
                type="text"
                name="entry_message"
                placeholder="Escribe un mensaje..."
                className="border p-2 rounded text-white w-full"
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Firmar
            </button>
        </form>
    );
}