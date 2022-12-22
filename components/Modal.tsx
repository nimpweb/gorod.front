import React from 'react'

interface IModalContext {
    modal: boolean
    openModal: () => void
    closeModal: () => void
}

export const ModalContext = React.createContext({} as IModalContext)

export const ModalContextProvider = ({children} : {children: React.ReactNode}) => {
    const [modal, setModal] = React.useState(false)

    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)
    return <ModalContext.Provider value={{modal, closeModal, openModal}}> { children }</ModalContext.Provider>
}

export const useModalForm = () => React.useContext(ModalContext);

interface IModalProps {
    title : string
    setModal: (value: boolean) => void
    children: React.ReactNode
}

const ModalForm = ({ title, children, setModal }: IModalProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-500/50  z-20 flex items-center justify-center">
        <div className="relative border border-1 bg-white w-[500px] max-h-fit rounded-2xl z-30 opacity-1 flex flex-col  p-5 ">
            <span 
                className="absolute bg-white rounded-full px-2 cursor-pointer right-[-20px] top-[-20px] font-semibold text-blue-800 z-20 hover:bg-slate-500 hover:text-white ease duration-200 shadow-lg"
                onClick={() => setModal(false)}
            >
                &times;
            </span>
            <h2 className="font-bold upper">{title}</h2>
            <div className="mt-4">
                {children}
            </div>
        </div>
    </div>
  )
}

export default ModalForm