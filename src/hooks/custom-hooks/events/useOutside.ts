import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeOut = {
	ref: any
	buttonRef: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialIsVisible: boolean): TypeOut => {
	const [isShow, setIsShow] = useState(initialIsVisible)
	const ref = useRef<HTMLElement>(null)
	const buttonRef = useRef<HTMLElement>(null)

	console.log(isShow)

	const handleClickOutside = (event: any) => {
		if (
			ref.current &&
			buttonRef.current &&
			!ref.current.contains(event.target) &&
			!buttonRef.current.contains(event.target)
		) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, buttonRef, isShow, setIsShow }
}
