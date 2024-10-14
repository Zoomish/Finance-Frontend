import { FC } from 'react'

interface CategoryModalProps {
    type: 'add' | 'edit'
    id?: number
    setVisibleModal: (visible: boolean) => void
}

const CategoryModal: FC<CategoryModalProps> = ({
    type,
    id,
    setVisibleModal,
}) => {
    return <div></div>
}

export default CategoryModal
