import { renderIcon } from '@/components/ui/icon/render-icon'
import { useToggleFavorite } from '@/hooks/mutations/products/useToggleFavorite'
import { useProfile } from '@/hooks/queries/user/useProfile'
import { FC } from 'react'
import { IFavoriteBtn } from './interface/favorite-btn.interface'

const FavoriteBtn: FC<IFavoriteBtn> = ({
	className,
	productId,
	defaultIcon,
	checkedIcon,
}) => {
	const { profile } = useProfile()

	const { toggleFavorite } = useToggleFavorite(productId)

	if (!profile) return null

	const isExists = profile.favorites.some((product) => product.id === productId)

	return (
		<button className={className && className} onClick={() => toggleFavorite()}>
			{isExists ? renderIcon(checkedIcon) : renderIcon(defaultIcon)}
		</button>
	)
}

export default FavoriteBtn
