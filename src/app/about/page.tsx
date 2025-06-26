import HowItWorksSection from "@/components/About/HowItWorksSection";
import OurBoxes from "@/components/About/OurBoxes";
import { ourBoxesContent, steps } from "@/data/howItWorksSteps";
export default function AboutPage(){
  return (
    <>
      <HowItWorksSection steps={steps} />
      <OurBoxes
        img={ourBoxesContent.img}
        title={ourBoxesContent.title}
        description={ourBoxesContent.description}
      />
    </>
  );
}