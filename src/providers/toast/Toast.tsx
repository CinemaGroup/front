import { FC } from 'react'
import { ToastBar, Toaster } from 'react-hot-toast'

const CustomToaster: FC = () => {
	return (
		<Toaster
			position="top-right"
			reverseOrder={false}
			gutter={8}
			toastOptions={{
				className: '',
				duration: 5000,
				style: {
					color: '#fff',
				},
				success: {
					style: {
						background: '#2EE89A',
					},
				},
				error: {
					style: {
						background: '#F31559',
					},
				},
			}}
		>
			{(t) => <ToastBar toast={t}>{({ icon, message }) => message}</ToastBar>}
		</Toaster>
	)
}

export default CustomToaster
