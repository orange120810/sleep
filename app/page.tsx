import Link from 'next/link';
import { getTodayDelivery } from '@/lib/api';
import { Envelope } from '@/components/Envelope';
import { Button } from '@/components/Button';

export default async function Home() {
  const delivery = await getTodayDelivery();
  return (
    <main className="p-4 space-y-8 text-center">
      <div>
        <h1 className="text-xl mb-1">眠りにつく前に、ひと言だけ</h1>
        <p className="text-sm">朝の便りは 7:00 に届きます</p>
      </div>
      <div className="flex justify-center">
        {delivery && <Envelope aria-label="今日の手紙" />}
      </div>
      <div className="flex justify-center space-x-4">
        <Link href="/compose">
          <Button>投函</Button>
        </Link>
        <Link href="/morning">
          <Button variant="secondary">モーニング</Button>
        </Link>
      </div>
    </main>
  );
}
