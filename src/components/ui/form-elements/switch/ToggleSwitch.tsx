import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import Icon from '../../icon/Icon'
import styles from './ToggleSwitch.module.scss'
import { IToggleSwitch } from './interface/toggle-switch.interface'

const ToggleSwitch: FC<PropsWithChildren<IToggleSwitch>> = ({
	className,
	value,
	onChange,
	error,
	children,
}) => {
	return (
		<div className={styles.toggle}>
			{error && <p className={styles.error}>{error.message}</p>}
			<div className={cn(styles.wrapper, className && className)}>
				<label className={styles.button}>
					<input
						className={styles.checkbox}
						type="checkbox"
						value={value}
						onChange={onChange}
					/>
					<div
						className={cn(styles.switch, {
							[styles.active]: value === true,
						})}
					>
						<Icon name="Check" />
						<Icon name="X" />
						<span className={styles.knob} />
					</div>
				</label>
				{children}
			</div>
		</div>
	)
}

export default ToggleSwitch
