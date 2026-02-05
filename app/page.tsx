import { getEntries } from '@/lib/data';
import GuestForm from './GuestForm';

export default function Home() {
  const entries = getEntries();

  return (
      <main className="p-10 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Libro de Visitas</h1>

        <GuestForm />

        <div className="space-y-4">
          {entries.map((entry) => (
              <div key={entry.id} className="border p-4 rounded shadow-sm">
                <h3 className="font-bold">{entry.name}</h3>
                <p className="text-gray-600">{entry.message}</p>
              </div>
          ))}
        </div>
      </main>
  );
}