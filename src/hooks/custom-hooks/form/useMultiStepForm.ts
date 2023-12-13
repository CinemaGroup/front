import { ReactElement, useState } from 'react'

export const useMultiStepForm = (steps: ReactElement[]) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const isFirstStep = currentIndex === 0
	const isLastStep = currentIndex === steps.length - 1

	const prev = () => {
		setCurrentIndex(i => {
			if (i <= 0) return i
			return i - 1
		})
	}

	const next = () => {
		setCurrentIndex(i => {
			if (i >= steps.length - 1) return i
			return i + 1
		})
	}

	const goTo = (index: number) => {
		setCurrentIndex(index)
	}

	const getVisibility = (stepIndex: number) =>
    currentIndex === stepIndex ? 'visible' : 'hidden';

	return {
		currentIndex,
		isFirstStep,
		isLastStep,
		step: steps[currentIndex],
		steps,
		prev,
		next,
		goTo,
		getVisibility
	}
}
