import { FC } from 'react'

interface ICategoryModalProps {
    type: 'add' | 'edit'
    id?: number
    setVisibleModal: (visible: boolean) => void
}

const CategoryModal: FC<ICategoryModalProps> = ({
    type,
    id,
    setVisibleModal,
}) => {
    return <div></div>
}

export default CategoryModal
