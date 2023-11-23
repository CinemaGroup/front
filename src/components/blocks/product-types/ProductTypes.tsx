'use client'

import Types from '@/components/templates/types/Types'
import { useProductTypes } from '@/hooks/queries/product-types/useProductTypes'
import { FC } from 'react'

const ProductTypes: FC<{ className?: string }> = ({ className }) => {
	const { types } = useProductTypes()

	return <Types types={types || []} className={className} />
}

export default ProductTypes
