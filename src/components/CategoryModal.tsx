import { FC } from 'react'
import { Form } from 'react-router-dom'

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
        <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-black/50 flex justify-center items-center">
            <Form className="">
                <label htmlFor="">
                    <small>Label</small>
                    <input type="text" />
                </label>

                <div className="flex items-center gap-2">
                    <button type="submit">Submit</button>
                    <button onClick={() => setVisibleModal(false)}>
                        Cancel
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default CategoryModal
