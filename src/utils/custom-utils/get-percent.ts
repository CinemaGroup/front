export const getPercent = (value: number, maxValue: number): number => {
	return Math.round((value * 100) / maxValue)
}
