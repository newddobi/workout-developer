"use client";
import Panel from "@/components/Panel";
import { WorkoutSpeedDial } from "@/components/WorkoutSpeedDial";
import { Button, Step, Stepper } from "@material-tailwind/react";
import { useState } from "react";

const Upper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <main className="w-full h-screen py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <Panel />
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          이전
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          다음
        </Button>
      </div>
      <WorkoutSpeedDial />
    </main>
  );
};

export default Upper;
