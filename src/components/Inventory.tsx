import { Card, CardHeader } from "./ui/card";

export default function Inventory() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-slate-100 dark:bg-black">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <Card className="h-full">
        <CardHeader>Work in Progess...</CardHeader>
      </Card>
    </main>
  );
}
