import { getArchive } from '@/lib/api';
import { Card } from '@/components/Card';

export default async function Archive() {
  const letters = await getArchive();
  return (
    <main className="p-4">
      <h1 className="text-xl mb-4">アーカイブ</h1>
      <div className="grid gap-2">
        {letters.map((l) => (
          <Card key={l.id}>{l.body}</Card>
        ))}
      </div>
    </main>
  );
}
