import { useState } from "react";

export function useMultiStepForm(steps: React.ReactElement[]) {
    const [currentIndex, setCurrentStepIndex] = useState<number>(0)

    function next() {
        setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1))
    }
    function back() {
        setCurrentStepIndex((prev) => Math.min(prev - 1, 0))
    }
    function goTo(index:number) {
        setCurrentStepIndex(index)
    }

    return{
        currentIndex,
        step:steps[currentIndex],
        isFirstStep:currentIndex == 0,
        isLastStep:currentIndex == steps.length - 1,
        next,
        goTo,
        back,
    }

}