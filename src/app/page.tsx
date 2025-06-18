import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Genius Chef</h1>
      <Card>
        <CardContent className="p-4">
          <p className="text-muted-foreground mb-2">
            Delicious meals delivered.
          </p>
          <Button>Order Now</Button>
        </CardContent>
      </Card>
    </main>
  );
}
