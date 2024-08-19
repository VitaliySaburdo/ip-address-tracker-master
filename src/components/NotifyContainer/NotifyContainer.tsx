import { Zoom, ToastContainer } from 'react-toastify';

export const NotifyContainer = () => {
  return (
            <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
        toastClassName='@apply bg-blue-500 text-white rounded-lg shadow-lg'
          />
  )
}
