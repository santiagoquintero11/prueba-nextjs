// lib/data.ts
export type GuestEntry = {
    id: string;
    name: string;
    message: string;
};

const guestbook: GuestEntry[] = [
    { id: '1', name: 'Alice', message: '¡Hola mundo!' },
    { id: '2', name: 'Bob', message: '¡Hello world!' },
    { id: '3', name: 'Laura', message: '...' },
];

export async function getEntries(): Promise<GuestEntry[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return guestbook;
}

export async function addEntry(entry: GuestEntry) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    guestbook.push(entry);
}