import cn from 'classnames'
import Image from 'next/image'
import { FC, useState } from 'react'
import PiIcon from '../../icon/PiIcon'
import Modal from '../../modal/Modal'
import Storage from '../../storage/Storage'
import styles from './UploadField.module.scss'
import { IUploadField } from './interface/upload-field.interface'

const UploadField: FC<IUploadField> = ({
	label,
	error,
	value,
	className,
	isNoImage = false,
	variant,
	onChange,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleFileSelect = (fileUrl: string) => {
		onChange(fileUrl)
		setIsOpen(false)
	}

	const handleRemoveFile = () => {
		onChange(undefined)
	}

	return (
		<div className={cn(styles.upload, className && className)}>
			<div className={styles.uploadWrapper}>
				{label && <span className={styles.label}>{label}</span>}
				<div className={styles.uploadFill}>
					{error && <p className={styles.error}>{error.message}</p>}
					<div className={styles.uploadBtns}>
						<button
							type="button"
							className={styles.uploadBtn}
							onClick={() => setIsOpen(!isOpen)}
						>
							Upload
						</button>
						{value && (
							<button
								type="button"
								className={styles.remove}
								onClick={handleRemoveFile}
							>
								<PiIcon name="PiTrash" />
							</button>
						)}
					</div>
				</div>
				{!isNoImage && (
					<div
						className={cn(styles.uploadImage, {
							[styles.poster]: variant === 'poster',
							[styles.icon]: variant === 'icon',
							[styles.thumbnail]: variant === 'thumbnail',
							[styles.active]: value,
						})}
					>
						{value && (
							<Image
								quality={100}
								unoptimized
								priority
								draggable={false}
								src={value}
								fill
								alt=""
							/>
						)}
					</div>
				)}
			</div>
			<Modal
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
				className={styles.modal}
			>
				<Storage onFileSelect={handleFileSelect} />
			</Modal>
		</div>
	)
}

export default UploadField
