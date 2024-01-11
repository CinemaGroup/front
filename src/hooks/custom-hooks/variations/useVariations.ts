import { IProductVariation } from '@/shared/interfaces/product.interface'
import { useState } from 'react'

export const useVariations = (variations: IProductVariation[]) => {
	const [currentIndex, setCurrentIndex] = useState<string>(variations[0].class)

	const currentVariation = variations.find(
		(variation) => variation.class === currentIndex
	) as IProductVariation

	return {
		currentIndex,
		variation: currentVariation,
		setCurrentIndex,
	}
}
