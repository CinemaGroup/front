import cn from 'classnames'
import { FC } from 'react'
import {
	IColor,
	ColorPicker as ReactColorPicker,
	useColor,
} from 'react-color-palette'
import 'react-color-palette/css'
import styles from '../FormElements.module.scss'
import { IColorPicker } from './interface/color-picker.interface'

const ColorPicker: FC<IColorPicker> = ({
	label,
	className,
	error,
	onChange,
}) => {
	const [color, setColor] = useColor('#ffffff')

	const handleColorChange = (newColor: IColor) => {
		setColor(newColor)
		if (onChange) {
			onChange(newColor)
		}
	}

	return (
		<div className={cn(styles.field, className && className)}>
			{label && <label className={styles.label}>{label}</label>}
			{error && <p className={styles.error}>{error.message}</p>}
			<ReactColorPicker color={color} onChange={handleColorChange} />
		</div>
	)
}

export default ColorPicker
