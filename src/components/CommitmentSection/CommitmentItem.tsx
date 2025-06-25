"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CommitmentItemProps } from "@/types";


    

export default function CommitmentItem({ title, content }: CommitmentItemProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border boreder-gray-200 rounded-md shadow-sm"
    >
      <AccordionItem value={title}>
        <AccordionTrigger className="text-xl font-medium px-4 py-3">
          {title}
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4 text-sm ">
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
  
