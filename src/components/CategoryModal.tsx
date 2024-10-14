import { FC } from 'react'

interface ICategoryModalProps {
    type: 'post' | 'patch'
    id?: number
    setVisibleModal: (visible: boolean) => void
}

const CategoryModal: FC<ICategoryModalProps> = ({
    type,
    id,
    setVisibleModal,
}) => {
    return (
        <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-black/50"></div>
    )
}

export default CategoryModal
