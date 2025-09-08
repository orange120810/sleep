import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function Pro() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl">Free と Pro</h1>
      <div className="grid gap-4">
        <Card>
          <h2 className="font-bold">Free</h2>
          <p>1日1通まで</p>
        </Card>
        <Card>
          <h2 className="font-bold">Pro</h2>
          <p>複数投函・デザイン解放・アーカイブ保存</p>
          <p className="mt-2">¥300 / 月</p>
          <Button className="mt-2 w-full">Proにアップグレード</Button>
        </Card>
      </div>
    </main>
  );
}
