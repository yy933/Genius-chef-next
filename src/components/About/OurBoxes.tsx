// components/About/OurBoxesSection.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { OurBoxesProps } from "@/types";


export default function OurBoxes({ img, title, description }: OurBoxesProps) {
  return (
    <section className="py-12 px-8">
      <Card className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 px-6 bg-primary text-primary-foreground">
        <div className="w-full flex justify-center md:w-1/3">
          <Image
            src={img}
            alt="food box"
            width={300}
            height={400}
            className="w-full max-w-[250px] h-auto md:max-w-sm md:h-auto rounded shadow "
          />
        </div>

        <CardContent className="w-full md:w-2/3 flex flex-col justify-center h-full">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="mb-4">{description}</p>
        </CardContent>
      </Card>
    </section>
  );
}
