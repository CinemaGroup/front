import { ISelectItem } from '@/components/ui/selects/custom-select/interface/custom-select.interface'
import { IProductVariation } from '@/shared/interfaces/product.interface'

export const VARIATION_DATA: (
	variations: IProductVariation[]
) => ISelectItem[] = (variations) =>
	variations.map((variation) => ({
		label: variation.class,
		key: variation.class,
	}))
